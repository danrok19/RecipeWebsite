import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, pipe } from 'rxjs';
import { MealsHttpService } from 'src/meals-http.service';
import { CategoryHttp, CategoryProtoClass } from './types/category-proto';

@Injectable({
  providedIn: 'root'
})
export class CategoriesHttpService {
  private url = 'http://localhost:7777/categories';

  constructor(private http: HttpClient) { }
  getCategories():Observable<CategoryProtoClass[]>{
    console.log("get categories");
    return this.http.get<CategoryHttp[]>(this.url)
    .pipe(
      map((categories:{name:string,
        index_nr:number}[])=>categories.map(category=>{
          return new CategoryProtoClass (category.name, category.index_nr);
        }))
    );
  }


  addCategory(category: CategoryProtoClass): Observable<CategoryProtoClass> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<CategoryProtoClass>(this.url, category, httpOptions)
      .pipe(
        catchError(this.handleError<CategoryProtoClass>('addCategory'))
      );
  }

  deleteCategory(index_nr: number): Observable<unknown> {
    console.log("wywolanie w service delete category o index_nr: "+index_nr);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const _url = `${this.url}/${index_nr}`; 
    console.log("url: "+_url);
    return this.http.delete(_url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteCategory'))
      );
  }

  editCategory(category:CategoryProtoClass):Observable<CategoryProtoClass>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put<CategoryProtoClass>(this.url + '/' + category.Index_nr, category, httpOptions)
    .pipe(
      catchError(this.handleError('editCategory', category))
    );
    
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' failed' + error);
      return of(result as T);
    };
  }
}
