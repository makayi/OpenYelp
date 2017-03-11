import {ModuleWithProviders} from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import {MainComponent} from './components/main/main.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import {AddRestaurantComponent} from './components/add/add.component';


const appRoutes:Routes=[
    {
        path:'About',
        component:AboutComponent
    }, {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'',
        component:HomeComponent
    },
      {
        path:'main',
        component:MainComponent
    }
    ,
       {
        path:'restaurant/:id',
        component:RestaurantComponent
    },

    {
        path:'add',
        component:AddRestaurantComponent
    }
];

export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);