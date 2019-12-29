import { IronGrid } from './../../classes/IronGrid';
import { IronGridService } from './../../services/irongrid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl:'./about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  public ironGrid: IronGrid
  public ironGrids: IronGrid[]
  
  constructor(private _ironGridService: IronGridService) {
    // todo
  }

  getGridInfo(id: number): void {
    this._ironGridService.getGridInfo(id)
        .subscribe(data => this.ironGrid = data)
  }

  listGridInfo(): void {
    this._ironGridService.listGridInfo()
        .subscribe(data => this.ironGrids = data)
  }

  async ngOnInit() {
    this.getGridInfo(1)
    // this.listGridInfo()
  }

}
