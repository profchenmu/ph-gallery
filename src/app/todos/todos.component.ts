import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  templateUrl: './todos.component.html',
  // styleUrls: ['./app.component.scss']
})
export class Todos {
  model = new Model();
  getName(){
    return this.model.user
  }
}