import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';


export class ListRecruesService {

  tabRecrues : Candidat[] = [];

  constructor() { }

  addRecrue(newRecrue) {
    if(this.tabRecrues.indexOf(newRecrue) == -1)
     this.tabRecrues.push(newRecrue);
    else
      alert('Ce candidat a déjà été recruté')

  }
}
