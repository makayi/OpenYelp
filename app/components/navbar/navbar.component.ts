import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'nav-bar',
  templateUrl: 'nav.component.html'
})
export class NavBarComponent  { 
  private home:string;
  private about:string;
  private contact:string;
  private add:string;

  private contactLink:string;
  private aboutLink:string;
  private homeLink:string;
  private addLink:string;

  constructor(){
    this.about="About";
    this.contact="Contact";
    this.home="Home";
    this.add="Add"
    this.addLink="add"
    this.aboutLink="/About";
    this.contactLink="/contact";
    this.homeLink="";
  }

  
 }




