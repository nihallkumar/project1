import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";


const appRoute: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', loadChildren: () => import('./MyComponents/recipes/recipes.module').then(m => m.RecipesModule) },
  { path: 'shopping-list', loadChildren: () => import('./MyComponents/shopping-list/shopping-list.module').then(m => m.ShoppingListModule) },
  { path: 'auth', loadChildren: () => import('./MyComponents/auth/auth.module').then(m => m.AuthModule) },
]


@NgModule({
  imports: [RouterModule.forRoot(appRoute,{ preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
