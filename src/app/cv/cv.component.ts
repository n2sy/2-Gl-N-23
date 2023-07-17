import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';
import { ListCandidatsService } from '../services/list-candidats.service';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers : [ListRecruesService]
})
export class CvComponent {
  tabCandidats : Candidat[] = [];

  constructor(private candSer : ListCandidatsService) {

  }

  addnewCandidat() {
    this.candSer.addCandidat();
  }

  ngOnInit() {
    this.candSer.afficherSalut();
    this.tabCandidats = this.candSer.tab;
  }

  selectedCandidat : Candidat;

  recupererCandidat(cand) {
    this.selectedCandidat = cand;
  }
}
