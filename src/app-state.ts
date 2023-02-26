import { makeAutoObservable, observable } from 'mobx';
import { Meal } from './meal';
import { createId } from './utils/createId';

export enum AppPage {
  MEALS = 'meals',
  TAGS = 'tags',
  SETTINGS = 'settings',
}

export class AppState {
  @observable page = AppPage.MEALS;

  // For creat meal dialog
  @observable createMealDialogOpen = false;
  @observable creatingMeal?: Meal;

  meals: Meal[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  openCreateMealDialog = () => {
    this.creatingMeal = new Meal();
    this.createMealDialogOpen = true;
  };

  confirmCreateMeal = () => {
    if (this.creatingMeal) {
      this.meals.push(this.creatingMeal);
    }

    this.createMealDialogOpen = false;
    this.creatingMeal = undefined;
  };

  cancelCreateMeal = () => {
    this.createMealDialogOpen = false;
    this.creatingMeal = undefined;
  };

  private loadMeals() {
    // Make some dummy meals
    for (let i = 0; i < 250; i++) {
      const meal = new Meal();
      meal.name = createId();
      this.meals.push(meal);
    }
  }
}
