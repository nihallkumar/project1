import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<ingredient>;

  onAddItem() {
    const inName = this.nameInputRef.nativeElement.value;
    const inAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new ingredient(inName,inAmount);
    this.ingredientAdded.emit(newIngredient)
  }


}
