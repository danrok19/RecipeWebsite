import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MealsHttpService } from 'src/meals-http.service';
import { MealProtoClass } from '../types/meal-proto';

@Component({
  selector: 'app-details-proto',
  templateUrl: './details-proto.component.html',
  styleUrls: ['./details-proto.component.css']
})
export class DetailsProtoComponent implements OnInit{
  meal: MealProtoClass;
  id: any;
  _id: number;

  constructor(private route: ActivatedRoute, private mealHttp: MealsHttpService){
    mealHttp.getMeal(this._id).subscribe(
      data => this.meal=data
   );
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get?('id'):params.get('id');//problem z nullem przy pobieraniu parametru
      //console.log(this.id);
    })
    this._id = +this.id;

  }
}
