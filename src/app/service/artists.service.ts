import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artist } from '../models/artists';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  API_URL: string = `http://localhost:9999/artist-service/artists`;
  
  constructor(private http:HttpClient){}
  getAll(page:number) : Observable<any> {
    return this.http.get<any>(`${this.API_URL}?page=${page}`);
  }

  getLatest() : Observable<any> {
    return this.http.get<any>(`${this.API_URL}/search/latest`);
  }

  create(artist: Artist) {
    console.log(artist);
    return this.http.post<Artist>(`${this.API_URL}`,artist,httpOptions);
  }

}
