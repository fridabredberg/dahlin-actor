import { Component, Input, OnInit, Output } from '@angular/core';
import { ListItem } from '../list-item'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  newItem: ListItem = {
    title: "",
    checked: false
  }

  allItems = [
    { title: 'eat', checked: true },
    { title: 'sleep', checked: false },
    { title: 'play', checked: false },
    { title: 'laugh', checked: false },
  ];

  ngOnInit(): void {
  }
  
  addTodo(input: string) {
    this.allItems.push({
      title: input,
      checked: false
    });
  }

}
