import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MealsHttpService } from 'src/meals-http.service';
import { MealServiceService } from '../meal-service.service';
import { DeleteMealComponent } from '../meal/delete-meal/delete-meal.component';
import { MealProto, MealProtoClass } from '../types/meal-proto';

@Component({
  selector: 'app-meals-proto',
  templateUrl: './meals-proto.component.html',
  styleUrls: ['./meals-proto.component.css']
})
export class MealsProtoComponent implements OnInit {
  meals: MealProtoClass[] = []
  whichClicked: number = -1;


  id: any;
  _id: number;

  constructor(private route: ActivatedRoute, private mealService: MealServiceService, private mealHttp: MealsHttpService) { 
    //this.meals = mealService.Meals;
    // mealService.MealsAsync.subscribe(
    //   data => this.meals=data
    // );
    mealHttp.getMeals().subscribe(
         data => this.meals=data
      );

      console.log(this.meals);
  }
  addMeal(newMeal: MealProtoClass) {
    const meal = new MealProtoClass(newMeal.Name,newMeal.TimePrep, newMeal.Index_nr, newMeal.Rating, newMeal.Ingredients, newMeal.Discription, newMeal.CategoryId);
    this.mealHttp.addMeal(meal).subscribe(ret => this.meals.push(meal));
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get?('id'):params.get('id');//problem z nullem przy pobieraniu parametru
      //console.log(this.id);
    })
    this._id = +this.id;
  }

  mealClicked(index:number):void{
    console.log("Klikles")
    this.whichClicked=index;
  }
  onMealAdded(newMeal: MealProtoClass) {
    //this.meals.push(newMeal);
    this.addMeal(newMeal);
  }

}