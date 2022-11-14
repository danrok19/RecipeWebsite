import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MealProtoClass } from '../types/meal-proto';

@Component({
  selector: 'app-add-meal-proto',
  templateUrl: './add-meal-proto.component.html',
  styleUrls: ['./add-meal-proto.component.css']
})
export class AddMealProtoComponent implements OnInit {
  @ViewChild('newMealName', { static: true }) mealName: ElementRef;
  @ViewChild('newTimePrep', { static: true }) mealTimePrep: ElementRef;
  @ViewChild('newMealIndex', { static: true }) mealIndex: ElementRef;
  @ViewChild('newMealDiscription',{ static: true }) mealDis: ElementRef;
  @ViewChild('newMealRating',{ static: true }) mealRating: ElementRef;
  @ViewChild('newMealCategoryId',{ static: true }) mealCategoryId: ElementRef;

  @Output() newMeal = new EventEmitter<MealProtoClass>();

  ingredients: String[] = [];
  ingredient: String;


  @ViewChild('fondovalor') fondovalor:ElementRef;

  constructor() { }


  getInputIngredient(){ //odczytuje z inputa nowy skladnik i wrzuca do array ze składnikami
    const valueInput = this.fondovalor.nativeElement.value;
    this.ingredients.push(this.fondovalor.nativeElement.value);
}
  ngOnInit(): void {
  }



  onAddMeal() {//dodawanie nowego dania z formularza
    if (
      this.mealName.nativeElement.value != '' &&
      this.mealTimePrep.nativeElement.value != '' &&
      this.mealIndex.nativeElement.value != '' &&
      this.mealRating.nativeElement.value != '' &&
      this.mealDis.nativeElement.value != '' &&
      //this.mealIngredients.nativeElement.value != ''
      this.mealCategoryId.nativeElement.value != ''
    ) {
      this.newMeal.emit(
        new MealProtoClass(
          this.mealName.nativeElement.value,
          this.mealTimePrep.nativeElement.value,
          this.mealIndex.nativeElement.value,
          this.mealRating.nativeElement.value,
          this.ingredients,
          this.mealDis.nativeElement.value,
          this.mealCategoryId.nativeElement.value
        )
      );
      this.mealName.nativeElement.value = '';
      this.mealTimePrep.nativeElement.value = '';
      this.mealIndex.nativeElement.value = '';
      this.mealDis.nativeElement.value = '';
      this.mealRating.nativeElement.value = '';
      this.mealCategoryId.nativeElement.value = '';
    }
  }
}
