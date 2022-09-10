import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../Shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex:number ;
  editedItem: Ingredient; 

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true ;
        this.editedItem = this.shoppingListService.getIngredient(index)
        this.slForm.setValue({
          name: this.editedItem.name, 
          amount: this.editedItem.amount})
      }
    );    // This is only accessed when 
  }

  onSubmit(form: NgForm) {
    const value = form.value
    const newIngridient = new Ingredient(value.name,value.amount);
       if (this.editMode){
        this.shoppingListService.updateIngredient(this.editedItemIndex, newIngridient)
       }else {
        this.shoppingListService.addIngredient(newIngridient);
       }
       this.editMode = false;
       form.reset();    
  }

  onClear(){
    this.slForm.reset()
    this.editMode = false
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
    this.onClear()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
