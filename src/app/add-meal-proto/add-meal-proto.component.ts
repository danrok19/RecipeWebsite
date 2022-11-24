import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup} from '@angular/forms';
import { MealProtoClass } from '../types/meal-proto';

@Component({
  selector: 'app-add-meal-proto',
  templateUrl: './add-meal-proto.component.html',
  styleUrls: ['./add-meal-proto.component.css']
})
export class AddMealProtoComponent implements OnInit {
  @Output() newMeal = new EventEmitter<MealProtoClass>();

  formModel: FormGroup;
  ingredients: FormArray;

  constructor() { }

   addIngredient(): void {
    this.ingredients.push(
      new FormControl({
        ingredient: new FormControl(),
      })
    );

  }

  getInputIngredient():String[]{
    const ingredientsArrayValues = Array<String>();
    for (let i = 0; i < this.ingredients.length; i++) {
      ingredientsArrayValues.push( this.ingredients.at(i).value.ingredient );
    }
    return ingredientsArrayValues;
}
  ngOnInit(): void {
    this.formModel = new FormGroup({
      name: new FormControl(),
      timePrep: new FormControl(),
      index: new FormControl(),
      rating: new FormControl(),
      categoryId: new FormControl(),
      ingredietnsArray: new FormArray([
        new FormControl({
          ingredient: new FormControl()
        })
      ]),
      discription: new FormControl()
    });
    this.ingredients = this.formModel.get("ingredietnsArray") as FormArray;
  }

   get ingredietnsArray():FormArray{
     return this.formModel.get("ingredietnsArray") as FormArray;
   }

  get name(){
    return this.formModel.get('name');
  }

  onAddMeal() {//dodawanie nowego dania z formularza
    this.newMeal.emit(
           new MealProtoClass(
            this.formModel.value.name,
            this.formModel.value.timePrep,
            this.formModel.value.index_nr,
            this.formModel.value.rating,
            this.getInputIngredient(),
            this.formModel.value.discription,
            this.formModel.value.categoryId
           )
         );
  }
  moreIngredients(): void {
    this.ingredients.push(
      new FormGroup({
        ingredient: new FormControl(),
      })
    );

    console.log("ingredients", this.ingredients);
  }
}
