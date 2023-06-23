import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css']
})
export class MsWordComponent {
  tabFonts = ['', 'Garamond', 'Phosphate', 'Arial'];
  bg;
  cl;
  size;
  font;
  @ViewChild('sz', {static : true }) sizePolice;

  changeSize() {
    
     console.log(this.sizePolice.nativeElement.value);
     
     this.size = this.sizePolice.nativeElement.value + 'px';
  }
  // changeSize(sz) {
  //   console.log(sz.value);
    
  //    this.size = sz.value + 'px';
  // }
}
