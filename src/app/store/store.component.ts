import { Component } from '@angular/core';
import { Model } from './repository.model';

@Component({
  templateUrl: './store.component.html',
  // styleUrls: ['./app.component.scss']
})
export class Store {
  model: Model = new Model();
  getClasses(): string {
    return this.model.getProducts().length === 5 ? 'bg-success' : 'bg-warning';
  }
}
