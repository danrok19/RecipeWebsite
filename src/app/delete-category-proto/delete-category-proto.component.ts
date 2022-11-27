import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-category-proto',
  templateUrl: './delete-category-proto.component.html',
  styleUrls: ['./delete-category-proto.component.css']
})
export class DeleteCategoryProtoComponent {
  @Output() isDelete = new EventEmitter<boolean>();

  constructor(){

  }

ngOnInit(): void {}
  delete() {
    this.isDelete.emit(true);
  }

}
