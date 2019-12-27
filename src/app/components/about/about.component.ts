import { IronGrid } from './../../classes/IronGrid';
import { IronGridService } from './../../services/irongrid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template:"<h1>{{ IronGrids }}<h1>",
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  public ironGrids: IronGrid[] = []

  constructor(private _ironGridService: IronGridService) {
    // todo
  }

  getGridInfo(id: number) {
    this._ironGridService.getGridInfo(id)
        .subscribe(data => {
          console.log(data);
          
          this.ironGrids = data
        })
        console.log(this.ironGrids)
  }

  ngOnInit() {
    this.getGridInfo(1)
  }

}
