import { Component, Input, OnInit } from '@angular/core';
import { MealProto, MealProtoClass } from '../types/meal-proto';

@Component({
  selector: 'app-meal-proto',
  templateUrl: './meal-proto.component.html',
  styleUrls: ['./meal-proto.component.css']
})
export class MealProtoComponent implements OnInit {
  //@Input() meal:MealProto;
  @Input() meal:MealProtoClass;
  @Input() isClicked:boolean = false;
  category: String;
  imgSrc: String;
  //imgSrc = 'assets/images/'+{meal.name}+'.jpg';

  constructor() { }

  ngOnInit(): void {
    if(this.meal.Name == 'Bigos'){
      this.imgSrc='assets/images/Bigos.jpg'
      this.category='Kuchnia polska'
    }
    else if(this.meal.Name == 'Zupa pomidorowa'){
      this.imgSrc='assets/images/pomidorowa.jpg'
      this.category='Kuchnia polska'
    }
    else if(this.meal.Name == 'Indyk'){
      this.imgSrc='assets/images/indukWarzywa.jpg'
      this.category='Kuchnia polska'
    }
    else if(this.meal.Name == 'Burger'){
      this.imgSrc='assets/images/burger.jpg'
      this.category='Kuchnia amerykańska'
    }
    else if(this.meal.Name == 'Schabowy z ziemniakami'){
      this.imgSrc='assets/images/schabowy.jpg'
      this.category='Kuchnia polska'
    }
    else{
      this.imgSrc='assets/images/defaultFood.jpg'
    }

  }
  doUnClick(){
    this.isClicked = false;
  }

}
