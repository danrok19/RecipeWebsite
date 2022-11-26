import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryProtoClass } from '../types/category-proto';
import { CategoriesHttpService } from '../categories-http.service';

@Component({
  selector: 'app-add-category-proto',
  templateUrl: './add-category-proto.component.html',
  styleUrls: ['./add-category-proto.component.css'],
})

export class AddCategoryProtoComponent implements OnInit {
  @Output() newCategory = new EventEmitter<CategoryProtoClass>();
  categories: CategoryProtoClass[];
  formModel: FormGroup;
  isShowInfo = false;
  showButton = true;

  constructor(private categoryHttp: CategoriesHttpService) {
    categoryHttp.getCategories().subscribe((data) => (this.categories = data));
    
  }


  ngOnInit(): void {
    this.formModel = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)])
    });
  }

  findFreeIndex(): number {
    let indexes: number[] = [];
    for (let i = 0; i < this.categories.length; i++) {
      indexes[this.categories[i].Index_nr] = 1;
    }
    for (let i = 0; i < indexes.length; i++) {
      if (indexes[i] == null) 
      {
        return i;
      }
      if(i == this.categories.length - 1) {
        return i + 1;
      }
    }
    return 0;
  }

  get name() {
    return this.formModel.get('name');
  }

  onAddCategory() {
    //dodawanie nowej kategorii z formularza
    this.newCategory.emit(
      new CategoryProtoClass(
        this.formModel.value.name,
        // this.formModel.value.index_nr
        this.findFreeIndex()
        // Math.floor(Math.random() * 1000)
      )
    );
  }
}
