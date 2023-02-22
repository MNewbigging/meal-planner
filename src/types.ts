export interface Tag {
  id: string;
  name: string;
}

export interface Ingredient {
  name: string;
}

export interface Meal {
  name: string;
  description: string;
  ingredients: Map<Ingredient, string>;
  tags: Tag[];
}
