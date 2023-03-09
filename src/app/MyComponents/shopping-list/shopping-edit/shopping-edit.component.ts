import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<ingredient>;

  constructor(private slService: ShoppingListService){}

  ngOnInit(): void {

  }

  onAddItem() {
    const inName = this.nameInputRef.nativeElement.value;
    const inAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new ingredient(inName,inAmount);
    // this.ingredientAdded.emit(newIngredient)
    this.slService.addIngredient(newIngredient)
  }


}
