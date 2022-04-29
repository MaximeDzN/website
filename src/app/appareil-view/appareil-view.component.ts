import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;
  appareils : any[] = [];
  appareilSub: Subscription | undefined;
  lastUpdate: Promise<Date> = new Promise((resolve,reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit(){
    this.appareilSub = this.appareilService.appareilSubject.subscribe({
      next: (appareils:any[]) => { this.appareils = appareils}
    });
    this.appareilService.emitAppareilSubject();
  }

  onTurnOn() {
    this.appareilService.switchOnAll();
  }
  onTurnOff() {
    this.appareilService.switchOffAll();

  }
}
