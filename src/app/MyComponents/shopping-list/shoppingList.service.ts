import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  // ingredientsChanged = new EventEmitter<ingredient[]>();
  ingredientsChanged = new Subject<ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: ingredient[] = [
    new ingredient('apple', 5),
    new ingredient('tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(id: number) {
    return this.ingredients[id];
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

  updateIngredient(index: number, newIngreient: ingredient) {
    this.ingredients[index] = newIngreient;
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
