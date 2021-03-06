import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientChange = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

      getIngredients() {
        return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChange.next(this.ingredients.slice()); // emit even when item is added to our array
      }

      addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientChange.next(this.ingredients.slice());
      }
}
