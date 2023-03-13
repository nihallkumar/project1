import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { RecipesComponent } from './MyComponents/recipes/recipes.component';
import { RecipeListComponent } from './MyComponents/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './MyComponents/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './MyComponents/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './MyComponents/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './MyComponents/shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './MyComponents/shared/dropdown.directive';
import { ShoppingListService } from './MyComponents/shopping-list/shoppingList.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './MyComponents/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './MyComponents/recipes/recipe-edit/recipe-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  exports: [ShoppingListComponent],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
