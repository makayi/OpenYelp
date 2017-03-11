import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Restaurant} from '../../model/Restaurant'

@Injectable()
export  class TidyekoService{
    private restaurantListUrl:string;
    private restaurantUrl:string;
    private addRestaurantUrl:string;

    constructor(private _http:Http){

    }

    getRestaurants(){
        this.restaurantListUrl='http://localhost:5000/api/restaurants';

        return this._http.get(this.restaurantListUrl).
        map(res=>res.json());

    }
getRestaurant(id:string){
    this.restaurantUrl='http://localhost:5000/api/restaurant/'+id;
    return this._http
    .get(this.restaurantUrl)
    .map(res=>res.json());

}

addRestaurant(restaurant:any){
    this.addRestaurantUrl="http://localhost:5000/api/add/restaurant";
    var headers= new Headers();
    headers.append('Content-Type','application/json');
    return this._http.post(this.addRestaurantUrl,JSON.stringify(restaurant),{headers:headers})
                .map(res=>res.json());

}

}
