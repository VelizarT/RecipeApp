import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
    @Output() addIngredientEvent = new EventEmitter<Ingredient>();
    @ViewChild('nameInput') nameInput: ElementRef;
    @ViewChild('amountInput') amountInput: ElementRef;

    addIngredient() {
        this.addIngredientEvent.emit({
            name: this.nameInput.nativeElement.value,
            amount: this.amountInput.nativeElement.value
        });
    }
}
