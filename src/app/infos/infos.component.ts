import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent {
  selectedId ;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    //this.selectedId = this.activatedRoute.snapshot.paramMap.get('id');
    //this.activatedRoute.snapshot.params['id'];

    this.activatedRoute.paramMap.subscribe(
      {
        next : (p : ParamMap) => {
          this.selectedId = p.get('id');
        },
        error : (err) => {
          console.log(err); 
        }
      }
    )
  }
}
