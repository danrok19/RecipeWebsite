import { Component, OnInit } from '@angular/core';
import { CategoriesHttpService } from '../categories-http.service';
import { CategoryProtoClass } from '../types/category-proto';
import { MealProto } from '../types/meal-proto';

@Component({
  selector: 'app-categories-proto',
  templateUrl: './categories-proto.component.html',
  styleUrls: ['./categories-proto.component.css']
})
export class CategoriesProtoComponent implements OnInit {
  categories: CategoryProtoClass[] = [];
  whichClicked: number = -1;

  constructor(private categoryHttp: CategoriesHttpService) {
    categoryHttp.getCategories().subscribe(
      data => this.categories=data
   );
   }

  ngOnInit(): void {
  }
  categoryClicked(index:number):void{
    console.log("Klikles"+index);
    this.whichClicked=index;
  }


  addCategory(newCategory: CategoryProtoClass) {
    const meal = new CategoryProtoClass(newCategory.Name, newCategory.Index_nr);
    this.categoryHttp.addCategory(meal).subscribe(ret => this.categories.push(meal));
  }
  onCategoryAdded(newCategory: CategoryProtoClass) {
    //this.categories.push(newCategory);
    this.addCategory(newCategory);
  }

  deleteCategory(deleteCategory: CategoryProtoClass) {
    const categoryToDeleteIndex_nr = this.categories.findIndex((category) => {
      return category.Index_nr === deleteCategory.Index_nr;
    });
    this.categories.splice(categoryToDeleteIndex_nr, 1);
  }


  doEdit(categoryEdit:CategoryProtoClass){
    this.categoryHttp.editCategory(categoryEdit);
  }

  onCatagoryEdited(editedCategory: CategoryProtoClass) {
    this.editCategory(editedCategory);
  }

  editCategory(editedCategory: CategoryProtoClass) {
    const category = new CategoryProtoClass(editedCategory.Name,editedCategory.Index_nr);
    this.categoryHttp.editCategory(category).subscribe();
  }
}
