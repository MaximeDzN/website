import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {


  @Input() appareilName:string = "";
  @Input() appareilStatus:string = "";
  @Input() appareilIndex:number = -1;
  @Input() id:number = -1;




  constructor(private appareilService:AppareilService) { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor(){
    if(this.appareilStatus === "allumé"){
      return 'green';
    } else {
      return 'red';
    }
  }

  onSwitchOn(){
    this.appareilService.switchOn(this.appareilIndex);
  }
  onSwitchOff(){
    this.appareilService.switchOff(this.appareilIndex);
  }
}
