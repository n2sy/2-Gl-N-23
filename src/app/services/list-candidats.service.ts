import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn : 'root'
})
export class ListCandidatsService {
  tab = [
    new Candidat(1, "homer", "simpson", 66, "ingénieur", "homer.jpg"),
    new Candidat(2, "lisa", "simpson", 55, "directeur", "lisa.png"),
    new Candidat(3, "hatem", "nasri", 23, "chef de projet", "bart.jpeg")
  ];
  constructor() { }

  addCandidat() {
    this.tab.push(new Candidat(1, "NEW", "CANDIDAT", 66, "ingénieur", "homer.jpg"))
  }

  afficherSalut() {
    console.log("Salut je suis le service");
    
  }
}
