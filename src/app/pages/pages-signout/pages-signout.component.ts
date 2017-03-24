import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lk-pages-signout',
  templateUrl: './pages-signout.component.html',
  styleUrls: [
    './pages-signout.component.scss'
  ]
})
export class PagesSignoutComponent implements OnInit {
  //-------------------------------------------------------------------
  constructor(public router: Router, private appService: AppService) {
    appService.getState().topnavTitle = 'Sign Out';
    appService.getState().pageFullscreen = true;


    this.SignOut();
  }

  ngOnInit() { 
  }

  ngOnDestroy() {
    this.appService.getState().pageFullscreen = false;
  }

 

  // signout to system
  SignOut() {
    console.log("Run Signout");
    // custom code for signout

    // redirect signin
    this.router.navigate(['/pages-signin']);
   
  }
}
