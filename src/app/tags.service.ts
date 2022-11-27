import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  tags: String[] = [];

  constructor() {
    this.tags.push("obiad", "śniadanie", "kolacja", "deser")
   }


  get tagsAsync(): Observable<String[]>{
    return of(this.tags);
   }
  getTags(): String[] {
    return ["obiad", "śniadanie", "kolacja", "święta", "deser"];
  }
}
