import { Component, Input, OnInit } from '@angular/core';
import { MealProto } from '../types/meal-proto';

@Component({
  selector: 'app-meal-proto',
  templateUrl: './meal-proto.component.html',
  styleUrls: ['./meal-proto.component.css']
})
export class MealProtoComponent implements OnInit {
  @Input() meal:MealProto;
  @Input() isClicked:boolean = false;
  imgSrc: String;
  //imgSrc = 'assets/images/'+{meal.name}+'.jpg';

  constructor() { }

  ngOnInit(): void {
    if(this.meal.name == 'Bigos'){
      this.imgSrc='assets/images/Bigos.jpg'
    }
    else if(this.meal.name == 'Zupa pomidorowa'){
      this.imgSrc='assets/images/pomidorowa.jpg'
    }
    else if(this.meal.name == 'Indyk z Warzywami'){
      this.imgSrc='assets/images/indukWarzywa.jpg'
    }
  }
  doUnClick(){
    this.isClicked = false;
  }

}
