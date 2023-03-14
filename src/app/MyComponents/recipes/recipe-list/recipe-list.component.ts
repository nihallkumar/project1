import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>;

  recipes: Recipe[];
  subscription:Subscription

  // recipes: Recipe[] = [
  //   new Recipe('Test heading 1', 'test description 1', 'https://static.onecms.io/wp-content/uploads/sites/43/2022/03/20/212721-Indian-Chicken-Curry-Murgh-Kari-mfs_005.jpg  '),
  //   new Recipe('Test heading 2', 'test description 2', 'https://static.onecms.io/wp-content/uploads/sites/43/2022/03/20/212721-Indian-Chicken-Curry-Murgh-Kari-mfs_005.jpg  ')
  // ];

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }


  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }

}
