import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  API_URL: string = `http://localhost:9999/artist-service`;
  constructor(private http:HttpClient){}
  getAll(page:number) : Observable<any> {
    return this.http.get<any>(`${this.API_URL}/artists?page=${page}`);
  }

}
