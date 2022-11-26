import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  tags: String[] = [];

  constructor() {
    this.tags.push("obiad", "śniadanie", "kolacja", "ostry", "polska", "ameryka", "parówka", "piekarnik", "taca", "łagodny", "lekkie", "święta", "tradycja", "zimne", "ciepłe")
   }


  get tagsAsync(): Observable<String[]>{
    return of(this.tags);
   }
  getTags(): String[] {
    return ["obiad", "śniadanie", "kolacja", "ostry", "polska", "ameryka", "parówka", "piekarnik", "taca", "łagodny", "lekkie", "święta", "tradycja", "zimne", "ciepłe"];
  }
}
