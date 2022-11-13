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
  @ViewChild('newMealIngredients',{ static: true }) mealIngredients: ElementRef;
  @ViewChild('newMealCategoryId',{ static: true }) mealCategoryId: ElementRef;

  @Output() newMeal = new EventEmitter<MealProtoClass>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddMeal() {
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
          new Array<String>,
          this.mealDis.nativeElement.value,
          this.mealCategoryId.nativeElement.value
        )
      );
      this.mealName.nativeElement.value = '';
      this.mealTimePrep.nativeElement.value = '';
      this.mealIndex.nativeElement.value = '';
      this.mealDis.nativeElement.value = '';
    }
  }
}
