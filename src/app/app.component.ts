import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

import { AppareilService } from './service/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes: number = 0;

  counterSub : Subscription|undefined;

  constructor() { }

  ngOnInit(): void {
    const counter = interval(1000);
    this.counterSub = counter.subscribe({
      next : (value) => this.secondes = value}
      );
      /*
    counter.subscribe({
      next : (value) => this.secondes = value,
      error: () => console.log("Une erreur est survenue"),
      complete: () => console.log("Observable complété")
     });*/
  }
  ngOnDestroy() : void {
    this.counterSub?.unsubscribe();
  }
}



