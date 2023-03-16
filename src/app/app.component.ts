import { Component, OnInit } from '@angular/core';
import { AuthService } from './MyComponents/auth/auth.service';
import { Recipe } from './MyComponents/recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // title = 'Recipe-Book';
  // loadedFeature ='recipe';

  // onNavigate(feature:string){
  //   this.loadedFeature=feature;
  // }

  constructor(private  authService : AuthService){}

    ngOnInit(): void {
        this.authService.autoLogin()
    }

}
