import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./MyComponents/auth/auth.component";
import { AuthGuard } from "./MyComponents/auth/auth.guard";
import { RecipeDetailComponent } from "./MyComponents/recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./MyComponents/recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./MyComponents/recipes/recipe-start/recipe-start.component";
import { RecipesResolverService } from "./MyComponents/recipes/recipes-resolver.service";
import { RecipesComponent } from "./MyComponents/recipes/recipes.component";
import { ShoppingListComponent } from "./MyComponents/shopping-list/shopping-list.component";

const appRoute: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch:'full' },
  { path: 'recipes', component: RecipesComponent, canActivate:[AuthGuard],
  children:[
    { path:'',component: RecipeStartComponent },
    { path:'new',component: RecipeEditComponent },
    { path:':id',component: RecipeDetailComponent, resolve:[RecipesResolverService] },
    { path:':id/edit',component: RecipeEditComponent, resolve:[RecipesResolverService] },
  ]},
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent },
]



@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
