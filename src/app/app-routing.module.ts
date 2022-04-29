import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { ArtistsComponent } from './artists/artists.component';
import { AuthComponent } from './auth/auth.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { AuthGuard } from './service/auth-guard-service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';

const routes: Routes = [
  {path:"appareils",component: AppareilViewComponent, canActivate: [AuthGuard]},
  {path:"appareils/:id",component:SingleAppareilComponent, canActivate: [AuthGuard]},
  {path:"auth",component: AuthComponent},
  {path:"artists",component: ArtistsComponent, canActivate: [AuthGuard]},
  {path:"",component: AppareilViewComponent},
  {path:"not-found",component: FourOFourComponent},
  {path:"**", redirectTo:"/not-found"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
