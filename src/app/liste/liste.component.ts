import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
  providers : [ListCandidatsService]
})
export class ListeComponent {
 allCandidats : Candidat[];
 @Output() msgToCv = new EventEmitter();

 constructor(private candSer : ListCandidatsService) {}

 ngOnInit() {
  this.allCandidats = this.candSer.tab;
 }

 sendCandToCv(cand) {
  this.msgToCv.emit(cand);
 }
}
