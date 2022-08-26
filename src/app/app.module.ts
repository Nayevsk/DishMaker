import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeListComponent } from './components/recipe/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './components/recipe/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './components/recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { EditComponent } from './components/shopping-list/edit/edit.component';
import { DropdownDirective } from './components/Shared/dropdown.directive';
import { ShoppingListService } from './components/shopping-list/shopping-list.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    EditComponent,
    DropdownDirective
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
