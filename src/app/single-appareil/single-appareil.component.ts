import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name:string = "appareil";
  status:string = "status";


  constructor(private appareilService: AppareilService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    const appareil = this.appareilService.getAppareilById(+id);
    this.name = appareil.name;
    this.status = appareil.status;


  }

}
