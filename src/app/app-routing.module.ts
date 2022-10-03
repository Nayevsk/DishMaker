import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";
import { AuthGuard } from "./components/auth/auth.guard";

import { RecipeDetailsComponent } from "./components/recipe/recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./components/recipe/recipe-edit/recipe-edit.component";
import { RecipeResolverService } from "./components/recipe/recipe-resolver.service";
import { RecipeStartComponent } from "./components/recipe/recipe-start/recipe-start.component";
import { RecipeComponent } from "./components/recipe/recipe.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";

const appRoutes: Routes = [
  { path: '' , redirectTo: '/recipes', pathMatch:'full' }, //path reached when the pages loads
  { path: 'recipes' , component: RecipeComponent,canActivate: [AuthGuard] ,children:[
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailsComponent, resolve: [RecipeResolverService]},    
    {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService]}
  ]},
  { path: 'shopping-list' , component: ShoppingListComponent},
  {path: 'auth' , component: AuthComponent}
  
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}