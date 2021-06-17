import { Component, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../list-item';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.sass']
})
export class TodoInputComponent {

  newItem: ListItem = {
    title: "",
    checked: false
  }

  @Output() newItemEvent : EventEmitter<ListItem> = new EventEmitter();

  addTodo() {
    this.newItemEvent.emit(this.newItem);
  }

}
