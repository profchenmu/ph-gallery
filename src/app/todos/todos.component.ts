import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  templateUrl: './todos.component.html',
  // styleUrls: ['./app.component.scss']
})
export class Todos {
  model = new Model();
  getName(){
    return this.model.user
  }
  getTodoItems(){
    return this.model.items.filter((item)=>item.done !== true)
  }
  addItem(value){
    if(value!==''){
      this.model.items.push(new TodoItem(value, false))
    }
  }
  test(e){
    console.log(e, this)
  }
  getInfo(){
  }
}