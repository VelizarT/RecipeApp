import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeDetails: Recipe;

  showRecipeDetail(recipe) {
    this.recipeDetails = {
      name: recipe.name,
      description: recipe.description,
      imagePath: recipe.imagePath
    };
  }

  constructor() { }

  ngOnInit() {
  }

}
