import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ComComponent } from './components/com/com.component';

import { OfferingComponent } from './components/offering/offering.component';
import { AboutComponent } from './components/about/about.component';
import { TimeComponent } from './components/time/time.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ComComponent,
  
    OfferingComponent,
    AboutComponent,
    TimeComponent,
    PhotosComponent,
    ContactusComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
