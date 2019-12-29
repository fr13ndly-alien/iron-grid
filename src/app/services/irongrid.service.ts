import { IronGrid } from './../classes/IronGrid';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { defaultGateway } from '../config/http.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IronGridService {

  private _url = defaultGateway

  constructor(private http: HttpClient) { }

  getGridInfo(id: number): Observable<IronGrid> {    
    return this.http.get<IronGrid>(this._url+ id)
  }

  listGridInfo(): Observable<IronGrid[]> {
    return this.http.get<IronGrid[]>(this._url)
  }
}
