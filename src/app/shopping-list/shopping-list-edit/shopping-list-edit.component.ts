import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
    @ViewChild('nameInput') nameInput: ElementRef;
    @ViewChild('amountInput') amountInput: ElementRef;

    constructor(private shoppingListService: ShoppingListService) {}

    addIngredient() {
        const name = this.nameInput.nativeElement.value;
        const amount = this.amountInput.nativeElement.value;
        const ingredient = new Ingredient(name, amount);
        this.shoppingListService.addIngredient(ingredient);
    }
}
