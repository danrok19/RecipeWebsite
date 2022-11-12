import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-meal',
  templateUrl: './delete-meal.component.html',
  styleUrls: ['./delete-meal.component.css']
})
export class DeleteMealComponent implements OnInit {
  @Output() isDelete = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  cancel() {
    this.isDelete.emit(false);
  }
  delete() {
    this.isDelete.emit(true);
  }

}
