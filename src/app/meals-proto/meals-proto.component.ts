import { Component, OnInit } from '@angular/core';
import { MealProto, MealProtoClass } from '../types/meal-proto';

@Component({
  selector: 'app-meals-proto',
  templateUrl: './meals-proto.component.html',
  styleUrls: ['./meals-proto.component.css']
})
export class MealsProtoComponent implements OnInit {
  meals: MealProtoClass[] = []
  whichClicked: number = -1;

  constructor() { 
    this.meals[0] = new MealProtoClass(
      'Bigos',
      120,
      0,
      4,
      new Array<String>,
      'To jest przepis bla bla bla v1',
      0
    );
    this.meals[1] = new MealProtoClass(
      'Zupa pomidorowa',
      100,
      1,
      3,
      new Array<String>,
      'To jest przepis bla bla bla v2',
      0
    );
    this.meals[2] = new MealProtoClass(
      'Indyk z Warzywami',
      180,
      2,
      5,
      new Array<String>,
      'To jest przepis bla bla bla v3',
      0
    );
    this.meals[3] = new MealProtoClass(
      'Burger',
      60,
      3,
      5,
      new Array<String>,
      'To jest przepis bla bla bla v4',
      2
    );
    this.meals[4] = new MealProtoClass(
      'Schabowy z ziemniakami',
      90,
      4,
      4,
      new Array<String>,
      'To jest przepis bla bla bla v5',
      0
    );
  }

  ngOnInit(): void {
  }

  mealClicked(index:number):void{
    console.log("Klikles")
    this.whichClicked=index;
  }
  onMealAdded(newMeal: MealProtoClass) {
    this.meals.push(newMeal);
  }
}
      //private name: string,
      //private timePrep: number,
      //private index_nr: number,
      //private rating: number,
      //private ingredientsList: Array<String>,
      //private discription: string,
      //private category: CategoryProtoClass