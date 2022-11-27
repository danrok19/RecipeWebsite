import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MealsProtoComponent } from './meals-proto/meals-proto.component';
import { MealProtoClass } from './types/meal-proto';

@Injectable({
  providedIn: 'root'
})
export class MealServiceService {
  meals: MealProtoClass[] = [];


  constructor() {
    this.meals.push( new MealProtoClass(
      'Bigos',
      120,
      0,
      4,
      new Array<String>,
      'To jest przepis bla bla bla v1',
      0,
      new Array<String>
    ));
    this.meals.push( new MealProtoClass(
      'Zupa pomidorowa',
      100,
      1,
      3,
      new Array<String>,
      'To jest przepis bla bla bla v2',
      0,
      new Array<String>
    ));
    this.meals.push( new MealProtoClass(
      'Indyk z Warzywami',
      180,
      2,
      5,
      new Array<String>,
      'To jest przepis bla bla bla v3',
      0,
      new Array<String>
    ));
    this.meals.push( new MealProtoClass(
      'Burger',
      60,
      3,
      5,
      new Array<String>,
      'To jest przepis bla bla bla v4',
      2,
      new Array<String>
    ));
    this.meals.push( new MealProtoClass(
      'Schabowy z ziemniakami',
      90,
      4,
      4,
      new Array<String>,
      'To jest przepis bla bla bla v5',
      0,
      new Array<String>
    ));
   }


   get Meals():MealProtoClass[]{
    return this.meals;
   }

   get MealsAsync(): Observable<MealProtoClass[]>{
    return of(this.meals);
   }
}
