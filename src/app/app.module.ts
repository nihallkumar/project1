import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { RecipesComponent } from './MyComponents/recipes/recipes.component';
import { RecipeListComponent } from './MyComponents/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './MyComponents/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './MyComponents/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './MyComponents/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './MyComponents/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
