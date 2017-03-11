import { Component,OnInit } from '@angular/core';
import { TidyekoService } from '../../services/RestaurantService/TidyekoService';
import { Restaurant } from '../../model/Restaurant';
import { Menu } from '../../model/menu';

@Component({
  moduleId:module.id,
  selector: 'main-component',
  templateUrl: 'main.component.html',
providers:[TidyekoService]
})
export class MainComponent implements OnInit { 

restaurants:Restaurant[];
restaurant:Restaurant;

constructor(private _tidyekoService:TidyekoService){

}

ngOnInit(){
  this.getRestaurants();
}
getRestaurants(){
  this._tidyekoService.getRestaurants
  ().subscribe(res=>{
    this.restaurants=res;
    console.log(this.restaurants);
  })

}


onSelect(_res:Restaurant):void{
  this.restaurant=_res;
  console.log(this.restaurant);



}

  
 }
