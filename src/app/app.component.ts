import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'culinaryApp';
  myScriptElement: HTMLScriptElement;
  constructor() { 
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "./assets/doNavBar.js"
    document.body.appendChild(this.myScriptElement);
  }
}
