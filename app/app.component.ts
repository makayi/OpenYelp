import { Component } from '@angular/core';
import { LoginService } from './services/LoginService';

@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
providers:[LoginService]
})
export class AppComponent  {  }
