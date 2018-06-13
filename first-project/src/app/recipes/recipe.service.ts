import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pasta pesto',
      'Best Italian dish ever',
      'https://cdn.pixabay.com/photo/2017/10/25/09/31/pasta-2887396_960_720.jpg',
      [
        new Ingredient('pasta', 1),
        new Ingredient('pesto', 3),
        new Ingredient('parmegian', 2)
      ]
    ),
    new Recipe(
      'Fruit Salad',
      'Sweet and healthy',
      'https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg',
      [
        new Ingredient('strawberry', 25),
        new Ingredient('banana', 1),
        new Ingredient('orange', 1),
        new Ingredient('blueberry', 15),
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipeMethod() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsMethod(ingredients);
  }
}
