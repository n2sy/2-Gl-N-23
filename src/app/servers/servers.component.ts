import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  selectedStatut = '';
  tabServers = [
    {
      nom  : "Development Server",
      type : 'small',
      date_d : new Date(),
      statut : "critical"
    },
    {
      nom  : "Development Test Server",
      type : 'small',
      date_d : new Date(),
      statut : "stable"
    },
    {
      nom  : "Development Server",
      type : 'large',
      date_d : new Date(),
      statut : "offline"
    },
    {
      nom  : "Nidhal Server",
      type : 'small',
      date_d : new Date(),
      statut : "stable"
    },
  ];

  affecterClass(st) {
    return {
      'list-group-item-success' : st == "stable",
      'list-group-item-danger' : st == "critical",
      'list-group-item-warning' : st == "offline",
    }
  }
}
