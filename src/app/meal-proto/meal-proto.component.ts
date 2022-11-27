import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MealsHttpService } from 'src/meals-http.service';
import { MealProto, MealProtoClass } from '../types/meal-proto';

@Component({
  selector: 'app-meal-proto',
  templateUrl: './meal-proto.component.html',
  styleUrls: ['./meal-proto.component.css']
})
export class MealProtoComponent implements OnInit {
  @Input() meal:MealProtoClass;
  @Input() isClicked:boolean = false;
  category: String;
  imgSrc: String;
  showDetails: number = -1;
  mealToDelete: number = -1;
  //deleteThis: boolean = false;
  @Output() doDeleteInParent = new EventEmitter<void>();

  mealDis:String;
  constructor(private mealHttp: MealsHttpService) { }

  ngOnInit(): void {
    this.mealDis = " Opis: "+this.meal.Description.slice(0, 60) + "...";
    if(this.meal.Name == 'Bigos'){
      this.imgSrc='assets/images/Bigos.jpg'
    }
    else if(this.meal.Name == 'Zupa pomidorowa'){
      this.imgSrc='assets/images/pomidorowa.jpg'
    }
    else if(this.meal.Name == 'Indyk'){
      this.imgSrc='assets/images/indukWarzywa.jpg'
    }
    else if(this.meal.Name == 'Burger'){
      this.imgSrc='assets/images/burger.jpg'
    }
    else if(this.meal.Name == 'Schabowy z ziemniakami'){
      this.imgSrc='assets/images/schabowy.jpg'
    }
    else if(this.meal.CategoryId == 0){
      this.imgSrc='assets/images/polishFoods.jpg'
    }
    else if(this.meal.CategoryId == 1){
      this.imgSrc='assets/images/slaskaKuchnia.jpg'
    }
    else if(this.meal.CategoryId == 2){
      this.imgSrc='assets/images/americanFood.jpg'
    }
    else if(this.meal.CategoryId == 3){
      this.imgSrc='assets/images/italianCuisine.jpg'
    }
    else if(this.meal.CategoryId == 4){
      this.imgSrc='assets/images/vegeCuisine.jpg'
    }
    else if(this.meal.CategoryId == 5){
      this.imgSrc='assets/images/cookies.jpg'
    }
    else{
      this.imgSrc='assets/images/defaultFood.jpg'
    }
    

    
    if(this.meal.CategoryId == 0){
      this.category='Kuchnia polska'
    }
    else if(this.meal.CategoryId == 1){
      this.category='Kuchnia sląska'
    }
    else if(this.meal.CategoryId == 2){
      this.category='Kuchnia amerykańska'
    }
    else if(this.meal.CategoryId == 3){
      this.category='Kuchnia włoska'
    }
    else if(this.meal.CategoryId == 4){
      this.category='Kuchnia wegańska'
    }
    else if(this.meal.CategoryId == 5){
      this.category='Ciasta'
    }

  }
  doUnClick(){
    this.isClicked = false;
  }
  ShowDetails(){
    this.showDetails = this.meal.Index_nr;
  }
  HideDetails(){
    this.showDetails = -1;
  }
  deleteMeal(){
    console.log("delete" + this.meal.Index_nr);
    this.mealHttp.deleteMeal(this.meal.Index_nr).subscribe();
  }

  deleteThisMeal() {
    this.mealToDelete = this.meal.Index_nr;
    this.deleteMeal();
  }
  isDelete(e: boolean) {
    if (!e) {
      this.mealToDelete = -1;
    } else {
      this.doDeleteInParent.emit();
    }
  }

}
