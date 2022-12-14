import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { exhaustMap, map, take, tap } from 'rxjs/operators';

import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from '../recipe/recipe.model';
import { AuthService } from '../auth/auth.service';



@Injectable({
  providedIn: 'root' // need to be added as soons as another service is added to this service
})
export class DataStorageService {

  url:string = 'https://ng-recipe-book-2dcc1-default-rtdb.firebaseio.com/recipes.json'

  constructor( private http:HttpClient, private recipe:RecipeService, private authService: AuthService) { } // adding private makes typescript add in the property "http" everything there is in HttpClient Module.  

  storeRecipes(){
    const recipe = this.recipe.getRecipes();
    this.http.put(this.url, recipe)
    .subscribe(response => {console.log(response);}
    )}

  fetchRecipes() {
    // bellow. take() comes from rxjs and informs that only one value form the obserable and the unsubscribe.
    return this.http
    .get<Recipe[]>(
      this.url)
      .pipe(
        map(recipes => { // This will make sure that ingredients of recipes are always something (even if an empity array []).
          return recipes.map(recipe => {
            return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          }) 
        }),
        tap(recipes => {
      this.recipe.setRecipes(recipes)  
    }),    
    );    
  }
}
