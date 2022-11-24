import { Component, OnInit } from '@angular/core';
import { CategoryProtoClass } from '../types/category-proto';
import { MealProto } from '../types/meal-proto';

@Component({
  selector: 'app-categories-proto',
  templateUrl: './categories-proto.component.html',
  styleUrls: ['./categories-proto.component.css']
})
export class CategoriesProtoComponent implements OnInit {
  categories: CategoryProtoClass[] = [];
  whichClicked: number = -1;

  constructor() { }

  ngOnInit(): void {
    this.categories[0] = new CategoryProtoClass(
      'Kuchnia polska',
      0,
      new Array<MealProto>
    );
    this.categories[1] = new CategoryProtoClass(
      'Kuchnia śląska',
      1,
      new Array<MealProto>
    );
    this.categories[2] = new CategoryProtoClass(
      'Kuchnia amerykańska',
      2,
      new Array<MealProto>
    );
    this.categories[3] = new CategoryProtoClass(
      'Kuchnia włoska',
      3,
      new Array<MealProto>
    );
    this.categories[4] = new CategoryProtoClass(
      'Kuchnia wegańska',
      4,
      new Array<MealProto>
    );
    this.categories[5] = new CategoryProtoClass(
      'Ciasta',
      5,
      new Array<MealProto>
    );
  }
  categoryClicked(index:number):void{
    console.log("Klikles")
    this.whichClicked=index;
  }

  onCategoryAdded(newCategory: CategoryProtoClass) {
    this.categories.push(newCategory);
  }
}
