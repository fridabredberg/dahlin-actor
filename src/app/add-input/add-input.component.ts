import { Component, EventEmitter, Output } from '@angular/core';
import { ListItem } from '../list-item'

@Component({
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
  styleUrls: ['./add-input.component.sass']
})
export class AddInputComponent {
    title: String = ""

  @Output() todoToAdd: EventEmitter<String> = new EventEmitter<String>()

  addTodo() {
    this.todoToAdd.emit(this.title)
  }
  
}
