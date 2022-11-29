import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // @Input() whichClicked:number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  // set WhichClicked(which: number) {
  //   this.whichClicked = which;
  // }
}
