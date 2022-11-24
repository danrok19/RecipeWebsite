import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, pipe } from 'rxjs';
import { MealsHttpService } from 'src/meals-http.service';
import { CategoryHttp, CategoryProtoClass } from './types/category-proto';

@Injectable({
  providedIn: 'root'
})
export class CategoriesHttpService {
  private url = 'http://localhost:7777/categories';

  constructor(private http: HttpClient, private mealHttp: MealsHttpService) { }
  getCategories():Observable<CategoryProtoClass[]>{
    console.log("get categories");
    return this.http.get<CategoryHttp[]>(this.url)
    .pipe(
      map((categories:{name:string,
        index_nr:number,
        mealsList: Array<String>
      }[])=>categories.map(category=>{
          return new CategoryProtoClass (category.name, category.index_nr, category.mealsList);
        }))
    );
  }
}
