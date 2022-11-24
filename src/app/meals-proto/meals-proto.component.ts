import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MealsHttpService } from 'src/meals-http.service';
import { MealServiceService } from '../meal-service.service';
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
    this.meals.push(newMeal);
  }
}
      //private name: string,
      //private timePrep: number,
      //private index_nr: number,
      //private rating: number,
      //private ingredientsList: Array<String>,
      //private discription: string,
      //private category: CategoryProtoClass