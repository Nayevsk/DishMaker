import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../Shared/shared.module";
import { EditComponent } from "./edit/edit.component";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
  declarations: [ShoppingListComponent,EditComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([
      { path: 'shopping-list' , component: ShoppingListComponent}
    ]),
    SharedModule 
  ]
})

export class ShoppingListModule {

}