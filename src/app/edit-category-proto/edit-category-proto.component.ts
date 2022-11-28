import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryProtoClass } from '../types/category-proto';

@Component({
  selector: 'app-edit-category-proto',
  templateUrl: './edit-category-proto.component.html',
  styleUrls: ['./edit-category-proto.component.css']
})
export class EditCategoryProtoComponent {
  @Input() categoryForEdit:CategoryProtoClass;
  @Output("editMethod1") doEditInParent:EventEmitter<CategoryProtoClass>=new EventEmitter();
  categoryNewValues: CategoryProtoClass;
  formModel: FormGroup;
  constructor(){
    this.formModel = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)])
   });
  }

  ngOnInit(): void {
    this.formModel.setValue({
      name:this.categoryForEdit.Name,
    })
  }
  get name() {
    return this.formModel.get('name');
  }

  hide():void{
    this.doEditInParent.emit(
      new CategoryProtoClass(
        this.formModel.value.name,
        this.categoryForEdit.Index_nr,
        ));

}
}