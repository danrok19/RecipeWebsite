import { Component, Input, OnInit } from '@angular/core';
import { CategoryProtoClass } from '../types/category-proto';

@Component({
  selector: 'app-category-proto',
  templateUrl: './category-proto.component.html',
  styleUrls: ['./category-proto.component.css']
})
export class CategoryProtoComponent implements OnInit {
  @Input() category:CategoryProtoClass;
  imgSrc: String; 

  constructor() { }

  ngOnInit(): void {
    if(this.category.Name == 'Kuchnia polska'){
      this.imgSrc='assets/images/polishFoods.jpg'
    }

    else if(this.category.Name == 'Kuchnia śląska'){
      this.imgSrc='assets/images/slaskaKuchnia.jpg'
    }

    else if(this.category.Name == 'Ciasta'){
      this.imgSrc='assets/images/cookies.jpg'
    }

    else if(this.category.Name == 'Kuchnia amerykańska'){
      this.imgSrc='assets/images/americanFood.jpg'
    }
    else if(this.category.Name == 'Kuchnia włoska'){
      this.imgSrc='assets/images/italianCuisine.jpg'
    }
    else if(this.category.Name == 'Kuchnia wegańska'){
      this.imgSrc='assets/images/vegeCuisine.jpg'
    }

  }

}
