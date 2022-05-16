import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Artist } from 'src/app/models/artists';
import { ArtistsService } from 'src/app/service/artists.service';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.scss']
})
export class CreateArtistComponent implements OnInit {

  @Output() updateLatestArtist: EventEmitter<any> = new EventEmitter<any>();

  artistForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['',Validators.required],
    nickName: ['', Validators.required],
    birthDate: ['',Validators.required]
  });
  constructor(private fb:FormBuilder, private artistService: ArtistsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.artistForm.valid){
      let artist: Artist = {
        id: undefined,
        lastName: this.artistForm.value.lastName,
        nickname: this.artistForm.value.nickName,
        firstName: this.artistForm.value.firstName,
        birthDate: new Date(this.artistForm.value.birthDate).toISOString(),
        createdAt: undefined,
        modifiedAt: undefined,
        artistStyle: undefined
      };
      this.artistService.create(artist).subscribe({
        next: (value) => {
          this.updateLatestArtist.emit() ;
        },
        error : (error) => {console.log(error);}
      });
      this.artistForm.reset();
    } else {
      console.log("Erreur, formulaire incomplet ou invalide");
    }
    
  }

}
