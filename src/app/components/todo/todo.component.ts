import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from "../../models/todo";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Output() removeTaskEvent: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() toggleTaskEvent: EventEmitter<Todo> = new EventEmitter<Todo>();

  public onRemove(): void {
    this.removeTaskEvent.emit(this.todo);
  }

  public onCompleted(): void {
    this.toggleTaskEvent.emit(this.todo);
  }
}
