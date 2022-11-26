import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-meal-proto',
  templateUrl: './delete-meal-proto.component.html',
  styleUrls: ['./delete-meal-proto.component.css']
})
export class DeleteMealProtoComponent {
  @Output() isDelete = new EventEmitter<boolean>();

  constructor(){

  }

ngOnInit(): void {}
  delete() {
    this.isDelete.emit(true);
  }
}
