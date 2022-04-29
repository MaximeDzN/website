import { Subject } from "rxjs";

export class AppareilService {
  appareilSubject = new Subject<any[]>();

    private appareils: any[] = [
        {
          id:1,
          name: "Machine à laver",
          status: "allumé"
        }, {
          id:2,
          name: "PC",
          status: "allumé"
        }, {
          id:3,
          name: "Monte escalier stana",
          status: "éteint"
        }];

        emitAppareilSubject(): void{
          this.appareilSubject.next(this.appareils.slice());
        }

        getAppareilById(id:number){
          return this.appareils.find((appareilObject) => { return appareilObject.id === id});
        }

        switchOnAll(){
            for(let appareil of this.appareils){
                appareil.status = "allumé";
            }
            this.emitAppareilSubject();
        }

        switchOffAll(){
            for(let appareil of this.appareils){
                appareil.status = "éteint";
            }
            this.emitAppareilSubject();

        }

        switchOn(i: number){
             this.appareils[i].status = "allumé";
             this.emitAppareilSubject();

        }

        switchOff(i: number){
            this.appareils[i].status = "éteint";
            this.emitAppareilSubject();

       }

    }