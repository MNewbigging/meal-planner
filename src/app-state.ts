import { action, makeAutoObservable, observable } from 'mobx';
import { Meal } from './meal';
import { createId } from './utils/createId';

export enum AppPage {
  MEALS = 'meals',
  TAGS = 'tags',
  SETTINGS = 'settings',
}

export class AppState {
  @observable page = AppPage.MEALS;

  // For create meal dialog
  @observable createMealDialogOpen = false;
  @observable creatingMeal?: Meal;

  // For meal page search
  @observable mealSearchQuery = '';
  visibleMeals: Meal[] = [];
  private meals: Meal[] = [];

  constructor() {
    makeAutoObservable(this);

    this.loadMeals();
  }

  @action changePage(page: AppPage) {
    this.page = page;
  }

  @action openCreateMealDialog = () => {
    this.creatingMeal = new Meal();
    this.createMealDialogOpen = true;
  };

  @action confirmCreateMeal = () => {
    if (this.creatingMeal) {
      this.meals.push(this.creatingMeal);
      this.searchMeals(this.mealSearchQuery);
    }

    this.createMealDialogOpen = false;
    this.creatingMeal = undefined;
  };

  @action cancelCreateMeal = () => {
    this.createMealDialogOpen = false;
    this.creatingMeal = undefined;
  };

  @action searchMeals(query: string) {
    this.mealSearchQuery = query;

    if (!query) {
      this.visibleMeals = [...this.meals];
      return;
    }

    const toLower = query.toLowerCase();

    this.visibleMeals = this.meals.filter((meal) => meal.name.toLowerCase().includes(toLower));
  }

  private loadMeals() {
    // Make some dummy meals
    for (let i = 0; i < 250; i++) {
      const meal = new Meal();
      meal.name = createId();
      this.meals.push(meal);
    }

    this.visibleMeals = [...this.meals];
  }
}
