import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], selStatut : string): any[] {
    if(!selStatut.length)
      return value;
    else {
      return value.filter(serv => serv['statut'] == selStatut)
      // const newTab = [];
      
      // for (const serv of value) {
      //     if(serv['statut'] == selStatut)
      //     // if(serv['statut'].includes(selStatut))
      //       newTab.push(serv);
      // }
      // return newTab;
    }
  }

}
