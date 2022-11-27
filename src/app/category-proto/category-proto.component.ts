import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MealsHttpService } from 'src/meals-http.service';
import { CategoriesHttpService } from '../categories-http.service';
import { CategoryProtoClass } from '../types/category-proto';
import { MealProtoClass } from '../types/meal-proto';

@Component({
  selector: 'app-category-proto',
  templateUrl: './category-proto.component.html',
  styleUrls: ['./category-proto.component.css']
})
export class CategoryProtoComponent implements OnInit {
  @Input() category:CategoryProtoClass;
  @Input() isClicked:boolean = false;
  imgSrc: String; 
  categoryToDelete: number = -1;
  @Output() doDeleteInParent = new EventEmitter<void>();
  checkingMeals: MealProtoClass[] = [];
  canDelete:boolean = true;//true => mozemy usunac kategorie/ false => nie mozemy usunac kategorii


  @Output("showEditForm") showEditInParent:EventEmitter<number>=new EventEmitter();
  clicked: number=-1;

  constructor(private categoryHttp: CategoriesHttpService, private mealHttp: MealsHttpService) {
    mealHttp.getMeals().subscribe(
      data => this.checkingMeals=data
   );
   }

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
    else{
      this.imgSrc='assets/images/cateogryDef.jpg'
    }

  }


  doUnClick(){
    this.isClicked = false;
  }
  deleteCategory(){
      console.log("delete" + this.category.Index_nr);
      this.categoryHttp.deleteCategory(this.category.Index_nr).subscribe();
  }

  deleteThisCategory() {
    for(let i = 0;i<this.checkingMeals.length;i++){
      if(this.checkingMeals[i].CategoryId == this.category.Index_nr){//sprawdzamy czy w bazie nie ma dań należących do kategoii ktora chcemy usunac
        this.canDelete=false;
      }
    }
    if(this.canDelete){
      this.categoryToDelete = this.category.Index_nr;
      this.deleteCategory();
    }
    else{
      console.log("Nie można usuwać kategorii do której są przypisane jakielkolwiek dania");
    }
  }

  isDelete(e: boolean) {
    if (!e) {
      this.categoryToDelete = -1;
    } else {
      this.doDeleteInParent.emit();
    }
  }

  clickOnCategory(which:number):void{
    this.clicked=which;
    this.showEditInParent.emit(which);
  }

}
