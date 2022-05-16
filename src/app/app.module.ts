// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card'; 
import { ReactiveFormsModule } from '@angular/forms';
//Components
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { ArtistsComponent } from './artists/artists.component';
//Services
import { AppareilService } from './service/appareil.service';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth-guard-service';
import { ArtistsService } from './service/artists.service';
import { CreateArtistComponent } from './artists/create-artist/create-artist.component';



@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOFourComponent,
    ArtistsComponent,
    CreateArtistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [AppareilService,AuthService,AuthGuard,ArtistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
