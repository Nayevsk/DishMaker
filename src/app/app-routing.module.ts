import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./components/auth/auth.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";

const appRoutes: Routes = [
  { path: '' , redirectTo: '/recipes', pathMatch:'full' }, //path reached when the pages loads
  
  { path: 'shopping-list' , component: ShoppingListComponent},
  {path: 'auth' , component: AuthComponent}
  
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}