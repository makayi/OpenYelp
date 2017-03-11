import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { UsersComponent }  from './components/users/users.component';
import {NavBarComponent  } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import {MainComponent} from './components/main/main.component';
import {RestaurantComponent} from './components/restaurant/restaurant.component';
import{AddRestaurantComponent} from './components/add/add.component';


import {routing} from './app.router';

@NgModule({
  imports:      [ BrowserModule,routing,HttpModule,FormsModule],
  declarations: [ AppComponent,UsersComponent,AddRestaurantComponent, 
                NavBarComponent,ContactComponent,AboutComponent,
                HomeComponent,MainComponent,RestaurantComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
