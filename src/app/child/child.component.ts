import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() cl = 'blue';
  @Output() msgToFirst = new EventEmitter();

  sendMsg() {
    this.msgToFirst.emit('Message de la part du Child');
  }
}
