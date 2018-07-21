import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Pasta Bolognese', 'Tasty pasta',
         'https://www.recipetineats.com/wp-content/uploads/2016/08/Spaghetti-Bolognese_3.jpg',
        [
           new Ingredient('pasta', 200),
           new Ingredient('chili', 1),
           new Ingredient('mince', 500)
        ]),
        new Recipe('Pasta Carbonara', 'Tasty pasta',
        'https://www.recipetineats.com/wp-content/uploads/2016/08/Spaghetti-Bolognese_3.jpg',
        [
            new Ingredient('egg', 1),
            new Ingredient('bacon', 100),
            new Ingredient('pasta', 200)
        ])];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipies() {
        return this.recipes.slice(); // to return a new array, not reference
    }

    getRecipe(id: number) {
        return this.recipes[id]; // to return a new array, not reference
    }

    sendToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
        // ingredients.forEach((ingredient) => {
        //     this.shoppingListService.addIngredient(ingredient);
        // });
    }
}
