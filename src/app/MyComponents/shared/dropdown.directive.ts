import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector:'[appDropdown]'
})

export class DropdownDirective{

  @HostBinding('class.show') isOpen = false;
  @HostBinding('class.hide') isClose = true;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen
    this.isClose = !this.isClose
  }
}
