import { action, makeAutoObservable, observable } from 'mobx';
import { createId } from './utils/createId';

export class MealTag {
  id: string;
  @observable color = '';
  @observable name = '';

  constructor(id?: string) {
    makeAutoObservable(this);

    this.id = id ?? createId();
  }

  @action setName(name: string) {
    this.name = name;
  }
}
