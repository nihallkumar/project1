import { Component } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: ingredient[] = [
    new ingredient('apple', 5),
    new ingredient('tomatoes', 10)
  ];

  onIngredientAdded(ingredient:ingredient){
      this.ingredients.push(ingredient)
  }
}
