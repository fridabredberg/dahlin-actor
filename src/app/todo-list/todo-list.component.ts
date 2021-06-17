import { Component, Input, OnInit, Output } from '@angular/core';
import { ListItem } from '../list-item'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent {

  allItems = [
    { title: 'eat', checked: true },
    { title: 'sleep', checked: false },
    { title: 'play', checked: false },
    { title: 'laugh', checked: false },
  ];

  @Input() newItem = {};
  
  addNewTodo(input: any) {
    this.allItems.push({
      title: input,
      checked: false
    });
  }

}
