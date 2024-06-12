import { Routes } from '@angular/router';
import { TodoListComponent } from "./pages/todo-list/todo-list.component";
import { AboutComponent } from "./pages/about/about.component";

export const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'about', component: AboutComponent },
];
