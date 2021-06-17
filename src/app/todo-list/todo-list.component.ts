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

  filter: 'all' | 'active' | 'done' = 'all';

  @Input() newItem = {};
  
  addNewTodo(input: any) {
    this.allItems.push({
      title: input,
      checked: false
    });
  }

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    else return this.allItems.filter(item => this.filter === 'done' ? item.checked : !item.checked)
  }

}
