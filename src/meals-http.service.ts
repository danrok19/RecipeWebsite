import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, pipe } from 'rxjs';
import { MealHttp, MealProtoClass } from './app/types/meal-proto';

@Injectable({
  providedIn: 'root'
})
export class MealsHttpService {
  private url = 'http://localhost:7777/meals';

  constructor(private http: HttpClient) { }

  getMeals():Observable<MealProtoClass[]>{
    console.log("get meals");
    return this.http.get<MealHttp[]>(this.url)
    .pipe(
      map((meals:{name:string,
        timePrep:number,
        index_nr:number,
        rating:number,
        ingredientsList: Array<String>,
        discription: string,
        categoryId: number}[])=>meals.map(meal=>{
          return new MealProtoClass (meal.name, meal.timePrep,meal.index_nr,meal.rating, meal.ingredientsList, meal.discription, meal.categoryId);
        }))
        //catchError(this.handleError<MealProtoClass[]>('getMeals',[]))
    );
  }



}
