import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MealProtoClass } from '../types/meal-proto';

@Component({
  selector: 'app-edit-meal-proto',
  templateUrl: './edit-meal-proto.component.html',
  styleUrls: ['./edit-meal-proto.component.css']
})
export class EditMealProtoComponent {
  @Input() mealForEdit:MealProtoClass;
  @Output("editMethod") doEditInParent:EventEmitter<MealProtoClass>=new EventEmitter();
  mealNewValues: MealProtoClass;
  formModel: FormGroup;

  constructor() {
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
      description: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.formModel.setValue({
      name:this.mealForEdit.Name,
      timePrep: this.mealForEdit.TimePrep,
      rating: this.mealForEdit.Rating,
      description: this.mealForEdit.Description
    })
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

  hide():void{
      this.doEditInParent.emit(
        new MealProtoClass(
          this.formModel.value.name,
          this.formModel.value.timePrep,
          this.mealForEdit.Index_nr,
          this.formModel.value.rating,
          this.mealForEdit.Ingredients,
          this.formModel.value.description,
          this.mealForEdit.CategoryId
          ));

  }

}
