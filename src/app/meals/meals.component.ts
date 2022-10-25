import { Component, OnInit } from '@angular/core';
import {MealType} from '../types/meal';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  meals: MealType[] = []
  whichClicked: number = -1;

  constructor() { 
    this.meals.push({name:"Bigos", realizationTime:120, rating:5});
    this.meals.push({name:"Kotlet Schabowy", realizationTime:80, rating:4});
    this.meals.push({name:"Indyk", realizationTime:180, rating:7});
  }

  ngOnInit(): void {
  }
  mealClicked(index:number):void{
    console.log("Klikles")
    this.whichClicked=index;
  }
  

}
