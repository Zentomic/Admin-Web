import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../app.service';
import { Auth } from '../../auth.service';

@Component({
  selector: 'lk-pages-signin',
  templateUrl: './pages-signin.component.html',
  styleUrls: [
    './pages-signin.component.scss'
  ]
})
export class PagesSigninComponent implements OnInit, OnDestroy {

  myAuth: any = null;

  constructor(private appService: AppService, private auth: Auth) {
    this.auth.handleAuthentication();
    appService.getState().topnavTitle = 'Sign In';
    appService.getState().pageFullscreen = true;
  }

  ngOnInit() {
  }

  ngOnDestroy() { 
    this.appService.getState().pageFullscreen = false;
  }

  clickFacebook() 
  {
    console.log("click facebook");
  }

  clickGoogle() {
    console.log("click clickGoogle");
  //  this.myAuth.loginWithGoogle();
  }

  clickLogin() {
    console.log("click login");
  }


}
