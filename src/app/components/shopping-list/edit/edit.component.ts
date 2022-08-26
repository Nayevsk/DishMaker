import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../Shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  

  constructor(private shopingListService:ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;    
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngridient = new Ingredient(ingName,ingAmount)   
    this.shopingListService.addIngredient(newIngridient)
  }
}
