import { Component, OnInit } from '@angular/core';
import { MealProto } from '../types/meal-proto';

@Component({
  selector: 'app-meals-proto',
  templateUrl: './meals-proto.component.html',
  styleUrls: ['./meals-proto.component.css']
})
export class MealsProtoComponent implements OnInit {
  meals: MealProto[] = []
  whichClicked: number = -1;

  constructor() { 
    this.meals.push({name:"Bigos", realizationTime:120, rating:5});
    this.meals.push({name:"Zupa pomidorowa", realizationTime:100, rating:2});
    this.meals.push({name:"Indyk z Warzywami", realizationTime:180, rating:5})
  }

  ngOnInit(): void {
  }

  mealClicked(index:number):void{
    console.log("Klikles")
    this.whichClicked=index;
  }
}
