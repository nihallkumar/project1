import { ingredient } from "../shared/ingredient.model";

export class Recipe {
  public name: string;
  public desc: string;
  public imgPath: string;
  public ingredients: ingredient[];

  constructor(name: string, desc: string, imgPath: string, ingredients: ingredient[]) {
    this.name = name;
    this.desc = desc;
    this.imgPath = imgPath;
    this.ingredients = ingredients;
  }
}
