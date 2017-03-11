
import { Component } from '@angular/core';
import { LoginService } from '../../services/LoginService';
import { OnInit } from '@angular/core';
import { TidyekoService } from '../../services/RestaurantService/TidyekoService';
import { Restaurant } from '../../model/Restaurant';

@Component({
  moduleId:module.id,
  selector: 'home-component',
  templateUrl: 'home.component.html',
  styleUrls:['./home.css','./palette.css'],
  providers:[TidyekoService]
})
export class HomeComponent implements OnInit { 

  restaurants:Restaurant[];
constructor(private _tidyekoService:TidyekoService){

}

ngOnInit(){
 
}
getRestaurants(){
  this._tidyekoService.getRestaurants
  ().subscribe(res=>{
    this.restaurants=res;
    console.log(this.restaurants);
  })

}

  
  
 }
