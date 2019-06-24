export class Model {
  user;
  items;
  constructor() {
    this.user = 'umimi';
    this.items = [
      new TodoItem('do1', false),
      new TodoItem('do2', false),
    ]
  }
}

export class TodoItem {
  action;
  done;
  constructor(action, done){
    this.action = action;
    this.done = done;
  }
}