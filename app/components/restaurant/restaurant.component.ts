import { Component,OnInit ,ElementRef,AfterViewInit,NgModule} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {  TidyekoService} from '../../services/RestaurantService/TidyekoService';
import {Restaurant} from './../../model/Restaurant';

@Component({
  moduleId:module.id,
  selector: 'restaurant-component',
  templateUrl: 'restaurant.component.html',
  providers:[TidyekoService]
})
export class RestaurantComponent implements OnInit, AfterViewInit  { 
     restaurant:Restaurant; 
    
    constructor(private _TidyekoService:TidyekoService, private _route:ActivatedRoute,private _elementRef:ElementRef){

    }
    ngOnInit(){
      this.getRestaurant();
    }


    ngAfterViewInit(){
        var s=document.createElement("script");
        s.type="text/javascript"
        s.src="app/components/restaurant/app.js";
        this._elementRef.nativeElement.appendChild(s);
    }


 getRestaurant(){
      this._route.params
       .map(params=>params['id'])
       .subscribe((id)=>{
           this._TidyekoService
           .getRestaurant(id)
           .subscribe(restaurant =>{
                this.restaurant=restaurant;
                console.log(this.restaurant.name);
           })
       });

 }
}
