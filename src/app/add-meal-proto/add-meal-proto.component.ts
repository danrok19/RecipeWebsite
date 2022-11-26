import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MealProtoClass } from '../types/meal-proto';
import { MealsHttpService } from 'src/meals-http.service';
import { MealServiceService } from '../meal-service.service';

@Component({
  selector: 'app-add-meal-proto',
  templateUrl: './add-meal-proto.component.html',
  styleUrls: ['./add-meal-proto.component.css'],
})
export class AddMealProtoComponent implements OnInit {
  @Output() newMeal = new EventEmitter<MealProtoClass>();
  meals: MealProtoClass[] = [];
  isShowInfo = false;
  showButton = true;
  formModel: FormGroup;
  ingredients: FormArray;
  ingredientsV2: Array<String> = [];

  constructor(mealHttp: MealsHttpService) {
    mealHttp.getMeals().subscribe((data) => (this.meals = data));
  }

  addIngredient(): void {
    this.ingredients.push(
      new FormControl({
        ingredient: new FormControl(),
      })
    );
  }

  findFreeIndex(): number {
    let indexes: number[] = [];
    for (let i = 0; i < this.meals.length; i++) {
      indexes[this.meals[i].Index_nr] = 1;
    }
    for (let i = 0; i < indexes.length; i++) {
      if (indexes[i] == null) {
        return i;
      }
      if (i == this.meals.length - 1) {
        return i + 1;
      }
    }
    return 0;
  }

  getInputIngredient(): Array<String> {
    const ingredientsArrayValues: Array<String> = [];

    for (let i = 0; i < this.ingredients.length; i++) {
      console.log(this.ingredients.at(i).value.ingredient);
      ingredientsArrayValues.push(this.ingredients.at(i).value.ingredient);
    }
    return ingredientsArrayValues;
  }

  ngOnInit(): void {
    this.formModel = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ]),
      timePrep: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(999),
      ]),
      rating: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(5),
      ]),
      categoryId: new FormControl(),
      ingredientsArray: new FormArray([
        new FormGroup({
          ingredient: new FormControl('', [Validators.required]),
        }),
      ]),
      description: new FormControl('', [Validators.required]),
    });
    this.ingredients = this.formModel.get('ingredientsArray') as FormArray;
  }

  get ingredientsArray(): FormArray {
    return this.formModel.get('ingredientsArray') as FormArray;
  }
  get name() {
    return this.formModel.get('name');
  }
  get timePrep() {
    return this.formModel.get('timePrep');
  }
  get rating() {
    return this.formModel.get('rating');
  }
  get description() {
    return this.formModel.get('description');
  }
  get ingredient() {
    return this.formModel.get('ingredient');
  }

  onAddMeal() {
    //dodawanie nowego dania z formularza
    this.newMeal.emit(
      new MealProtoClass(
        this.formModel.value.name,
        this.formModel.value.timePrep,
        this.findFreeIndex(),
        this.formModel.value.rating,
        this.getInputIngredient(),
        this.formModel.value.description,
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

    //console.log("ingredients", this.ingredients);
  }
}
