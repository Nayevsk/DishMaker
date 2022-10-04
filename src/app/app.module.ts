import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { EditComponent } from './components/shopping-list/edit/edit.component';
import { DropdownDirective } from './components/Shared/dropdown.directive';
import { ShoppingListService } from './components/shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './components/recipe/recipe.service';
import { AuthComponent } from './components/auth/auth.component';
import { LoadingSpinnerComponent } from './components/Shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './components/auth/auth-intercerptor.service';
import { AlertComponent } from './components/Shared/alert/alert.component';
import { RecipesModule } from './components/recipe/recipe.module';
import { RecipesRoutingModule } from './components/recipe/recipes-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,    
    ShoppingListComponent,
    EditComponent,
    DropdownDirective,    
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RecipesModule,
    RecipesRoutingModule
  ],
  providers: [ShoppingListService, RecipeService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
