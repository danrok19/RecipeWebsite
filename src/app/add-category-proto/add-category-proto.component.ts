import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryProtoClass } from '../types/category-proto';
import { MealProto } from '../types/meal-proto';

@Component({
  selector: 'app-add-category-proto',
  templateUrl: './add-category-proto.component.html',
  styleUrls: ['./add-category-proto.component.css']
})
export class AddCategoryProtoComponent implements OnInit {

  @Output() newCategory = new EventEmitter<CategoryProtoClass>();

  formModel: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formModel = new FormGroup({
      name: new FormControl(),
      index_nr: new FormControl()
    });
  }

  get name(){
    return this.formModel.get('name');
  }

  get index_nr(){
    return this.formModel.get('index_nr');
  }

  onAddMeal() {//dodawanie nowej kategorii z formularza
    this.newCategory.emit(
           new CategoryProtoClass(
            this.formModel.value.name,
            this.formModel.value.index_nr,
            new Array<String>
           )
         );
  }
}
