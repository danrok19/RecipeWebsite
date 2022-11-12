import { Component, Input, OnInit } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myScriptElement: HTMLScriptElement;
  constructor() { 
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "./assets/doNavBar.js"
    document.body.appendChild(this.myScriptElement);
  }
  ngOnInit(): void {
  }



}


