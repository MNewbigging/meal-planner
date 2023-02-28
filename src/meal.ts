import { action, makeAutoObservable, observable } from 'mobx';
import { createId } from './utils/createId';

export class Meal {
  id = createId();
  @observable name = '';

  constructor() {
    makeAutoObservable(this);
  }

  @action setName(name: string) {
    this.name = name;
  }
}
