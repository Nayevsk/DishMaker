import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./components/auth/auth.component";

const appRoutes: Routes = [
  { path: '' , redirectTo: '/recipes', pathMatch:'full' } //path reached when the pages loads  
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}