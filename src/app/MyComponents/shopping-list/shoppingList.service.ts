import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  // ingredientsChanged = new EventEmitter<ingredient[]>();
  ingredientsChanged = new Subject<ingredient[]>();

  private ingredients: ingredient[] = [
    new ingredient('apple', 5),
    new ingredient('tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: ingredient) {
    this.ingredients.push(ingredient);
    // this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient)
    // }

    this.ingredients.push(...ingredients);
    // this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
