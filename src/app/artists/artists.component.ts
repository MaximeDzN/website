import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { catchError, map, merge, of, startWith, Subscription, switchMap } from 'rxjs';
import { Artist } from '../models/artists';
import { ArtistsService } from '../service/artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent {

  artistsSub: Subscription | undefined;

  displayedColumns: string[] = ['nickname', 'firstname', 'lastname', 'birthDate', 'artistStyle', 'createdAt', 'updatedAt'];
  artists: Artist[] = [];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private artistService: ArtistsService) { }

  ngAfterViewInit() {
    //this.loadData();
    merge(this.paginator!.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.artistService.getAll(this.paginator!.pageIndex).pipe(catchError(() => of(null)));
        }),
        map(data => {
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;
          if (data === null) {
            return [];
          }
          this.resultsLength = data.page.totalElements;
          return data._embedded.artists;
        })
      ).subscribe({ next: data => (this.artists = data) });
  }
  /*
  
    loadData() {
      this.artistsSub = this.artistService.getAll().subscribe({
        next: (value) => { this.artists = value._embedded.artists; console.log(this.artists) },
        error: (error) => { console.log(error) },
      })
    }*/

}
