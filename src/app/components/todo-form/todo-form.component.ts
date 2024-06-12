import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  @Output() addTaskEvent = new EventEmitter<string>();

  public title: string = '';

  public onSubmit() {
    if (this.title.trim()) {
      this.addTaskEvent.emit(this.title);
      this.title = '';
    }
  }
}
