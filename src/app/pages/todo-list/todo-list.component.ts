import { Component, OnInit } from '@angular/core';
import { TodoComponent } from "../../components/todo/todo.component";
import { TodoFormComponent } from "../../components/todo-form/todo-form.component";
import { Todo } from "../../models/todo";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    TodoComponent,
    TodoFormComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [];

  ngOnInit(): void {
    this.getTasks();
    console.log(this.todos)
  }

  public getTasks(): void {
    const savedTasks: string | null = localStorage.getItem('todos');

    if (savedTasks) {
      this.todos = JSON.parse(savedTasks);
    }
  }

  public saveTasks(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  public addTask(title: string): void {
    this.todos.unshift({
      id: Date.now(),
      title: title,
      completed: false
    });
    this.saveTasks();
  }

  public toggleTask(item: Todo): void {
    this.todos = this.todos.map((todo: Todo): Todo => todo.id !== item.id ? todo : {
      ...item,
      completed: !item.completed
    });
    this.saveTasks();
  }

  public removeTask(item: Todo): void {
    this.todos = this.todos.filter((todo: Todo): boolean => todo.id !== item.id);
    this.saveTasks();
  }
}
