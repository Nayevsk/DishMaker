import { Subject } from "rxjs";

import { Ingredient } from "../Shared/ingridient.model"

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>()
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[]= [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 3)
    ] 

    getIngredients () { 
    return this.ingredients.slice()  
    }

    getIngredient(index:number){
      return this.ingredients[index];
    }

    addIngredient(ingredient:Ingredient) {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.next(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]){
       this.ingredients.push(...ingredients); // ... spread the elements in an array, so the push method can be used
       this.ingredientsChanged.next(this.ingredients.slice())
    }

    updateIngredient(index:number , newIngredient: Ingredient) {
      this.ingredients[index] = newIngredient;
      this.ingredientsChanged.next(this.ingredients.slice())
    }

    deleteIngredient(index:number){
      this.ingredients.splice(index,1);
      this.ingredientsChanged.next(this.ingredients.slice());
    }

  // onAddItem() {
  //   const ingName = this.nameInputRef.nativeElement.value;    
  //   const ingAmount = this.amountInputRef.nativeElement.value;
  //   const newIngridient = new Ingredient(ingName,ingAmount)   
  //   this.ingredientAdded.emit(newIngridient)
  // }
}