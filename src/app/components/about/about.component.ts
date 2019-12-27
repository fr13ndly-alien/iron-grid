import { IronGrid } from './../../classes/IronGrid';
import { IronGridService } from './../../services/irongrid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template:"<h1>{{ ironGrid }}<h1>",
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  gridData: String = "abc"
  public ironGrid: IronGrid

  constructor(private _ironGridService: IronGridService) {

  }

  getGridInfo(id: String) {
    console.log(">>> Call service")
    return this._ironGridService.getGridInfo(id)
        .subscribe(data => this.ironGrid = data)
  }

  ngOnInit() {
    this.getGridInfo("1")
    console.log(this.ironGrid);
    
  }

}
