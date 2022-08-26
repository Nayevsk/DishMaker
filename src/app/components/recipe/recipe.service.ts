import { EventEmitter, Injectable} from "@angular/core";
import { Ingredient } from "../Shared/ingridient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Tasty',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries',20)
      ]),
    new Recipe(
      'Burguer',
      'This is tasty too',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
      [
        new Ingredient('Meat',1),
        new Ingredient('Buns',2) 
      ])
  ];

  constructor (private slService: ShoppingListService){}
  
  getRecipes() {
    return this.recipes.slice(); 
    // Use slice to return a copy of the array, without it any changes in ths array would affect the service array.
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  } 
}