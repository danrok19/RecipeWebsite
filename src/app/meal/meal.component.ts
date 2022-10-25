import { Component, OnInit, Input} from '@angular/core';
import { MealType } from '../types/meal';

@Component({
  selector: 'give-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  @Input() meal:MealType
  @Input() prefix: string
  @Input() isClicked:boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  doUnClick(){
    this.isClicked = false;
  }
}
