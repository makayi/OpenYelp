import { Component } from '@angular/core';
//import {PostsService} from '../services/posts.service'

@Component({
  selector: 'users',
  template: '<h1> Whats up </h1>'
 
  ,

})

export class UsersComponent  {

  selectedHero:Hero;
  heros=HEROES;


constructor(){



}


onselect(hero: Hero): void {
  this.selectedHero=hero;
}



}

export class Hero{
  id:number;
  name:String;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];




