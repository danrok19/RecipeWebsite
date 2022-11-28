import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, pipe, tap } from 'rxjs';
import { MealHttp, MealProtoClass } from './app/types/meal-proto';

@Injectable({
  providedIn: 'root'
})
export class MealsHttpService {
  private url = 'http://localhost:7777/meals';

  constructor(private http: HttpClient) { }

  getMeals():Observable<MealProtoClass[]>{
    console.log("Wywolanie getMeals()");
    return this.http.get<MealHttp[]>(this.url)
    .pipe(
      map((meals:{name:string,
        timePrep:number,
        index_nr:number,
        rating:number,
        ingredientsList: Array<String>,
        description: string,
        categoryId: number,
        tagsList: Array<String>}[])=>meals.map(meal=>{
          return new MealProtoClass (meal.name, meal.timePrep,meal.index_nr,meal.rating, meal.ingredientsList, meal.description, meal.categoryId,meal.tagsList);
        })),
        catchError(this.handleError<MealProtoClass[]>('getMeals',[]))
    );
  }

  getMeal(index_nr: number):Observable<MealProtoClass[]>{
    console.log("get meal");
    const url = `${this.url}/index_nr=${index_nr}`;
    return this.http.get<MealHttp[]>(url)
    .pipe(
      map((meals:{name:string,
        timePrep:number,
        index_nr:number,
        rating:number,
        ingredientsList: Array<String>,
        description: string,
        categoryId: number,
        tagsList: Array<String>}[])=>meals.map(meal=>{
          return new MealProtoClass (meal.name, meal.timePrep,meal.index_nr,meal.rating, meal.ingredientsList, meal.description, meal.categoryId, meal.tagsList);
        })),
        catchError(this.handleError<MealProtoClass[]>(`getMeal index_nr=${index_nr}`))
    );
    
  }

  addMeal(meal: MealProtoClass): Observable<MealProtoClass> {
    console.log("Wywolanie addMeals() nowego meal o id:" + meal.Index_nr);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<MealProtoClass>(this.url, meal, httpOptions)
      .pipe(
        catchError(this.handleError<MealProtoClass>('addMeal'))
      );
  }

  deleteMeal(index_nr: number): Observable<unknown> {
    console.log("wywolanie w service delete meala o index_nr: "+index_nr);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const _url = `${this.url}/${index_nr}`; 
    console.log("url: "+_url);
    return this.http.delete(_url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteMeal'))
      );
  }

  editMeal(meal:MealProtoClass):Observable<MealProtoClass>{
    console.log("wywolanie w service edit meala o index_nr: "+meal.Index_nr);
    console.log(meal.Name);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const _url = `${this.url}/${meal.Index_nr}`; 

    return this.http.put<MealProtoClass>(_url, meal, httpOptions)
    .pipe(
      catchError(this.handleError('editMeal', meal))
    );
    
  }
  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' failed' + error);
      return of(result as T);
    };
  }


}
