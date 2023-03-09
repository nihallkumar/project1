import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // ingredients: ingredient[] = [
  //   new ingredient('apple', 5),
  //   new ingredient('tomatoes', 10)
  // ];

  ingredients: ingredient[] = [];

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe(
      (ingredients: ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  // onIngredientAdded(ingredient:ingredient){
  //     this.ingredients.push(ingredient)
  // }
}
