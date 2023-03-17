import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AuthInterceptorService } from "./MyComponents/auth/auth-interceptor.service";
import { RecipeService } from "./MyComponents/recipes/recipe.service";
import { ShoppingListService } from "./MyComponents/shopping-list/shoppingList.service";

@NgModule({
  providers:[
    ShoppingListService,
    RecipeService
    ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule{

}
