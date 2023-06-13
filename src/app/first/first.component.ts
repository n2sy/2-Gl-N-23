import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  section: string = '2-GL 2023';
  university = 'tek-up';
  hd = false;
  color = 'pink';
  feres = '';

  traitement() {
    // alert("J'ai été cliqué");
    this.university = 'Sésame';
  }

  traitementDuFirst(msg) {
    alert(msg);
    this.feres = msg;
  }
}
