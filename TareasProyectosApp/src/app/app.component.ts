import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SessionService } from './services/session.service';
import { Router } from '@angular/router';
import { SqliteHelperService } from './services/sqlite.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private session: SessionService,
    private router: Router,
    private sqliteServ:SqliteHelperService
  ) {
    this.initializeApp();
  }

  ngOnInit(){
    /* let db=this.sqliteServ.getDb();
    console.log('db:',db); */
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  logout() {
    this.session.destroy();
    this.router.navigate(["/login"]);
  }
}
