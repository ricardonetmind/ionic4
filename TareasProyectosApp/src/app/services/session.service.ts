import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Item } from '../modelos/items';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _accessToken: string;
  private _name: string;

  constructor(private _storageServ: StorageService) {
  }

  public saveToken(token: string) {
    this._accessToken = token;
    //localStorage.setItem('token', this._accessToken);
    this._storageServ.addItem({ key: 'token', value: this._accessToken })
  }

  public getToken() {
    //this._accessToken=localStorage.getItem('token');
    this._storageServ.getItem('token').then((item: Item) => {
      console.log('Token:', item);
      this._accessToken = (item ? item.value : null);
      // return this._accessToken;    
    });

    // return this._storageServ.getItem('token');
    return this._accessToken;    

  }

  public destroy(): void {
    this._accessToken = null;
    //localStorage.setItem('token',null);
    this._name = null;
    this._storageServ.deleteItem('token')
  }
}
