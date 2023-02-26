import { makeAutoObservable, observable } from 'mobx';

export class Meal {
  @observable name = '';

  constructor() {
    makeAutoObservable(this);
  }
}
