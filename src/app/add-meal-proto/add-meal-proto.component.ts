import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MealProtoClass } from '../types/meal-proto';
import { MealsHttpService } from 'src/meals-http.service';
import { MealServiceService } from '../meal-service.service';
import { TagsService } from '../tags.service';

@Component({
  selector: 'app-add-meal-proto',
  templateUrl: './add-meal-proto.component.html',
  styleUrls: ['./add-meal-proto.component.css'],
})
export class AddMealProtoComponent implements OnInit {
  @Output() newMeal = new EventEmitter<MealProtoClass>();
  meals: MealProtoClass[] = [];
  tags: String[] = [];

  formModel: FormGroup;
  ingredients: FormArray;
  ingredientsV2: Array<String> = [];
  whichClicked:number;
  chosenTags:String[]=[];

  constructor(mealHttp: MealsHttpService,tagsService: TagsService,private _formBuilder: FormBuilder) {
    mealHttp.getMeals().subscribe((data) => (this.meals = data));
     tagsService.tagsAsync.subscribe(
       data => this.tags=data
   );

   
  }


  addIngredient(): void {
    this.ingredients.push(
      new FormControl({
        ingredient: new FormControl(),
      })
    );
  }

  findFreeIndex(): void {
    for (let i = 0; i < this.meals.length; i++)
      console.log(this.meals[i].CategoryId);
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
      timePrep: new FormControl('', [Validators.required]),
      index_nr: new FormControl(),
      rating: new FormControl(),
      categoryId: new FormControl(),
      ingredientsArray: new FormArray([
        new FormGroup({
          ingredient: new FormControl(),
        }),
      ]),
      description: new FormControl(),
    });
    this.ingredients = this.formModel.get('ingredientsArray') as FormArray;
  }

  get ingredientsArray(): FormArray {
    return this.formModel.get('ingredientsArray') as FormArray;
  }

  get name() {
    return this.formModel.get('name');
  }

  onAddMeal() {
    //dodawanie nowego dania z formularza
    this.newMeal.emit(
      new MealProtoClass(
        this.formModel.value.name,
        this.formModel.value.timePrep,
        this.formModel.value.index_nr,
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

  tagClicked(index:number):void{
    console.log("Klikles tag o id:"+index);
    this.whichClicked=index;
    this.chosenTags.push(this.tags[index])
    // for(let i=0;i<this.chosenTags.length;i++){
    //   console.log(this.chosenTags[i]);
    // }
  }
}
