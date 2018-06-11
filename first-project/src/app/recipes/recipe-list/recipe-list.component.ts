import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'The Description for it',
      'https://get.pxhere.com/photo/dish-meal-food-vegetable-recipe-cuisine-vegetarian-food-parmigiana-1417897.jpg'
    ),
    new Recipe(
      'Fruit Salad',
      'Mix all ingredients',
      'https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(shownRecipe: Recipe) {
    this.recipeWasSelected.emit(shownRecipe);
  }
}
