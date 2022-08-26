import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {
  selectedRecipe:Recipe;

  constructor(private recipeServices: RecipeService) { }

  ngOnInit() {
    this.recipeServices.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe
        }
        // Listener that will listen to changes in the selected recipe.
      );
  }

}
