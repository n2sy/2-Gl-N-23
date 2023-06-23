import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  tabCandidats : Candidat[] = [
    new Candidat(1, "homer", "simpson", 66, "ingénieur", "homer.jpg"),
    new Candidat(2, "lisa", "simpson", 55, "directeur", "lisa.png"),
    new Candidat(3, "hatem", "nasri", 23, "chef de projet", "bart.jpeg"),
    new Candidat(1, "homer", "simpson", 66, "ingénieur", "homer.jpg"),
    new Candidat(2, "lisa", "simpson", 55, "directeur", "lisa.png"),
    new Candidat(3, "hatem", "nasri", 23, "chef de projet", "bart.jpeg"),
    new Candidat(1, "homer", "simpson", 66, "ingénieur", "homer.jpg"),
    new Candidat(2, "lisa", "simpson", 55, "directeur", "lisa.png"),
    new Candidat(3, "hatem", "nasri", 23, "chef de projet", "bart.jpeg"),
    new Candidat(1, "homer", "simpson", 66, "ingénieur", "homer.jpg"),
    new Candidat(2, "lisa", "simpson", 55, "directeur", "lisa.png"),
    new Candidat(3, "hatem", "nasri", 23, "chef de projet", "bart.jpeg"),
    new Candidat(1, "homer", "simpson", 66, "ingénieur", "homer.jpg"),
    new Candidat(2, "lisa", "simpson", 55, "directeur", "lisa.png"),
    new Candidat(3, "hatem", "nasri", 23, "chef de projet", "bart.jpeg"),

  ];
  selectedCandidat : Candidat;

  recupererCandidat(cand) {
    this.selectedCandidat = cand;
  }
}
