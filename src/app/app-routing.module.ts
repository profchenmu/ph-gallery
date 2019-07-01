import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Todos } from './todos/todos.component';
import { Store } from './store/store.component';

const routes: Routes = [
  {path: 'todos', component: Todos},
  {path: 'store', component: Store},
  // {path: '**', redirectTo: '/todos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
