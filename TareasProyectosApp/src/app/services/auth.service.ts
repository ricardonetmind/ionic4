import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { Observable } from 'rxjs';
import { Item } from '../modelos/items';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private session: SessionService,
  ) {
  }

  public isSignedIn(): Promise<any>|string {
    return this.session.getToken();
  }

  public doSignOut() {
    this.session.destroy();
  }

  public doSignIn(accessToken: string, name: string) {
    if ((!accessToken) || (!name)) {
      return;
    }
    this.session.saveToken(accessToken);
    //this.session.name = name;
  }

}
