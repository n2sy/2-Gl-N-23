import { Component } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent {
  bg = "pink";
  cl = "grey";

  changeColor() {
    this.bg = "yellow";
  }
}
