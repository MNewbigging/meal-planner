import { makeAutoObservable, observable } from 'mobx';
import { Meal } from './meal-model';
import { createId } from './utils/createId';

export enum AppPage {
  MEALS = 'meals',
  TAGS = 'tags',
  SETTINGS = 'settings',
}

export class AppState {
  @observable page = AppPage.MEALS;

  meals: Meal[] = [];

  constructor() {
    makeAutoObservable(this);

    this.loadMeals();
  }

  private loadMeals() {
    // Make some dummy meals
    for (let i = 0; i < 250; i++) {
      this.meals.push({
        name: createId(),
      });
    }
  }
}
