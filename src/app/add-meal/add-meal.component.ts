import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MealType, MealClass } from '../types/meal';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {
  @ViewChild('newMealName', { static: true }) mealName: ElementRef;
  @ViewChild('newTimePrep', { static: true }) mealTimePrep: ElementRef;
  @ViewChild('newMealIndex', { static: true }) mealIndex: ElementRef;
  @ViewChild('newMealDiscription',{ static: true }) mealDis: ElementRef;

  @Output() newMeal = new EventEmitter<MealClass>();




  constructor() { }

  ngOnInit(): void {
  }

  onAddMeal() {
    if (
      this.mealName.nativeElement.value != '' &&
      this.mealTimePrep.nativeElement.value != '' &&
      this.mealIndex.nativeElement.value != ''
    ) {
      this.newMeal.emit(
        new MealClass(
          this.mealName.nativeElement.value,
          this.mealTimePrep.nativeElement.value,
          this.mealIndex.nativeElement.value,
          this.mealDis.nativeElement.value
        )
      );
      this.mealName.nativeElement.value = '';
      this.mealTimePrep.nativeElement.value = '';
      this.mealIndex.nativeElement.value = '';
      this.mealDis.nativeElement.value = '';
    }
  }

}
