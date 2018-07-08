import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() passRecipeData = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Pasta Bolognese', 'Tasty pasta', 'https://www.recipetineats.com/wp-content/uploads/2016/08/Spaghetti-Bolognese_3.jpg'),
    new Recipe('Pasta Carbonara', 'Tasty pasta', 'https://www.recipetineats.com/wp-content/uploads/2016/08/Spaghetti-Bolognese_3.jpg')
  ];

  onClickedItem(recipe: Recipe) {
    this.passRecipeData.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
