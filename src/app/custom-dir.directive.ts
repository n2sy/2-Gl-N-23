import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {
  @HostBinding('style.backgroundColor') bg;// = "yellow";
  @HostBinding('style.color') color;// = "red";
  constructor() { }

  @HostListener('mouseenter') mouseenter() {
    this.bg = "grey";
    this.color = "white";
  }
  @HostListener('mouseleave') mouseleave() {
    this.bg = "white";
    this.color = "black";
  }

}
