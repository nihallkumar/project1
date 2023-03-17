import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './MyComponents/recipes/recipes.module';
import { ShoppingListModule } from './MyComponents/shopping-list/shopping-list.module';
import { SharedModule } from './MyComponents/shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './MyComponents/auth/auth.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RecipesModule,
    ShoppingListModule,
    AuthModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
