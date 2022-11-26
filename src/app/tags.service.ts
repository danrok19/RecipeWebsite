import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor() { }


  getTags(): String[] {
    return ["obiad", "śniadanie", "kolacja", "ostry", "polska", "ameryka", "parówka", "piekarnik", "taca","łagodny", "lekkie", "święta"];
  }
}
