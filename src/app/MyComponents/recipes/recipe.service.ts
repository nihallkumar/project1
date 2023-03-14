import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://www.allrecipes.com/thmb/mmP7TwfbUf4LjFtEjNpPBNaC928=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/78117-wienerschnitzel-ddmfs-3X4-0200-ec06b882b575486ab7398957709413d2.jpg',
      [
        new ingredient('Meat', 1),
        new ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say!',
      'https://media-cdn.tripadvisor.com/media/photo-s/0e/7e/7b/b9/fat-burger-and-fries.jpg',
      [
        new ingredient('Buns', 1),
        new ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(i:number) {
    return this.recipes[i];
  }

  addIngredientsToShoppingList(ingredients: ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number,newRecipe:Recipe){
    this.recipes[index]=newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number)
  {
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice())
  }

}
