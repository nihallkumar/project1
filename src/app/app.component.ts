import { Component } from '@angular/core';
import { Recipe } from './MyComponents/recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  loadedFeature ='recipe';

  onNavigate(feature:string){
    this.loadedFeature=feature;
  }
}
