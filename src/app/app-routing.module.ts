import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent } from './components/home/home.component'
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ComComponent } from './components/com/com.component';
import  { OfferingComponent } from './components/offering/offering.component';

import { PhotosComponent } from './components/photos/photos.component';
import { AboutComponent } from './components/about/about.component';
import { TimeComponent } from './components/time/time.component';
import { ContactComponent } from './components/contact/contact.component';



const routes: Routes = [
  {
    path: "header",
    component: HeaderComponent
  },
  
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "fo",
    component:   FooterComponent 

  },
  {
    path: "com",
    component:   ComComponent 

  },
  
  {
    path: "off",
    component:   OfferingComponent

  },
  {
    path: "abo",
    component:   AboutComponent

  },
  {
    path: "time",
    component:  TimeComponent

  },
  {
    path: "photos",
    component:  PhotosComponent

  },

  {
    path: "contact",
    component:  ContactComponent

  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
