import { action, makeAutoObservable, observable } from 'mobx';
import { createId } from './utils/createId';

export class MealTag {
  id: string;
  @observable color = '#000000';
  @observable name = '';

  constructor(id?: string) {
    makeAutoObservable(this);

    this.id = id ?? createId();
  }

  @action setName(name: string) {
    this.name = name;
  }

  @action setColor(color: string) {
    this.color = color;
  }
}
