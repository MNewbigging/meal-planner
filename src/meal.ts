import { action, makeAutoObservable, observable } from 'mobx';

export class Meal {
  @observable name = '';

  constructor() {
    makeAutoObservable(this);
  }

  @action setName(name: string) {
    this.name = name;
  }
}
