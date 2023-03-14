import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  // @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<ingredient>;


  @ViewChild('f', { static: false }) slForm: NgForm
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: ingredient

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
      (id: number) => {
        this.editedItemIndex = id;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(id);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        })
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new ingredient(value.name, value.amount)
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    }
    else {
      this.slService.addIngredient(newIngredient)
    }
    this.editMode=false;
    form.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }

  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  // onAddItem() {
  //   const inName = this.nameInputRef.nativeElement.value;
  //   const inAmount = this.amountInputRef.nativeElement.value;
  //   const newIngredient = new ingredient(inName,inAmount);
  //   // this.ingredientAdded.emit(newIngredient)
  //   this.slService.addIngredient(newIngredient)
  // }

}
