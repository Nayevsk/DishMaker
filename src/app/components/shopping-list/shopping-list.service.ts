import { EventEmitter } from "@angular/core";
import { Ingredient } from "../Shared/ingridient.model"

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[]= [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 3)
    ] 

    getIngredients () { 
    return this.ingredients.slice()  
    }

    addIngredient(ingredient:Ingredient) {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]){
       this.ingredients.push(...ingredients); // ... spread the elements in an array, so the push method can be used
       this.ingredientsChanged.emit(this.ingredients.slice())
    }

  // onAddItem() {
  //   const ingName = this.nameInputRef.nativeElement.value;    
  //   const ingAmount = this.amountInputRef.nativeElement.value;
  //   const newIngridient = new Ingredient(ingName,ingAmount)   
  //   this.ingredientAdded.emit(newIngridient)
  // }
}