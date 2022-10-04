import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./components/auth/auth.component";

const appRoutes: Routes = [
  { path: '' , redirectTo: '/recipes', pathMatch:'full' }, // Below lazy loading is being applied.
  { path: 'recipes', loadChildren: () => import('./components/recipe/recipe.module').then( m => m.RecipesModule)},
  { path: 'shopping-list', loadChildren: () => import('./components/shopping-list/shopping-list.module').then( m => m.ShoppingListModule)},
  {path: 'auth', loadChildren: () => import('./components/auth/auth.module').then( m => m.AuthModule)} 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})], // improve lazy-loading, pre-loads modules after first module (auth) is loaded, providing the bes experience for the user.
  exports: [RouterModule]
})

export class AppRoutingModule {

}