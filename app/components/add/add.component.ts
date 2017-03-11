import { Component ,ElementRef} from '@angular/core';
import { Restaurant } from './../../model/Restaurant';
import {TidyekoService} from './../../services/RestaurantService/TidyekoService';

@Component({
  moduleId: module.id,
  selector: 'add-restaurant-component',
  templateUrl: 'add.component.html',
  styleUrls:['./add.css'],
  providers:[TidyekoService]

})

export class AddRestaurantComponent {
  private response:string;
  name: string;
  location: string;
  address: string;



  constructor(private _tidyekoservice:TidyekoService, private _elementRef:ElementRef) {




  }


  addRestaurant(){
    var restaurant={
      name:this.name,
      location:this.location,
      address:this.address
    }

    this._tidyekoservice.addRestaurant(restaurant).subscribe(data=>{
      console.log(data.status);
      this.response=data.status;

      if (this.response=="200") {
        this.showToast();
        
      } else {
        console.log("Its different");
        
      }


    })
  }

  showToast(){
      var s=document.createElement("script");
        s.type="text/javascript"
        s.src="app/components/add/add.js";
        this._elementRef.nativeElement.appendChild(s);
  }


}
