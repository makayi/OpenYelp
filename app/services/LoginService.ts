import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService{
    constructor (private _http:Http){

    }

    login(){
        return this._http.get('localhost:3000/getUserInfo').
        map(res=>res.json());
    }

}