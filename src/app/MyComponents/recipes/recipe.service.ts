import { Recipe } from "./recipe.model";

export class RecipeService{
  private recipes: Recipe[] = [
    new Recipe('Test heading 1', 'test description 1', 'https://static.onecms.io/wp-content/uploads/sites/43/2022/03/20/212721-Indian-Chicken-Curry-Murgh-Kari-mfs_005.jpg  '),
    new Recipe('Test heading 2', 'test description 2', 'https://static.onecms.io/wp-content/uploads/sites/43/2022/03/20/212721-Indian-Chicken-Curry-Murgh-Kari-mfs_005.jpg  ')
  ];

  getRecipes(){
    return this.recipes.slice();
  }

}
