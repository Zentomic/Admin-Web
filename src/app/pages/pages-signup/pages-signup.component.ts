import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lk-pages-signup',
  templateUrl: './pages-signup.component.html',
  styleUrls: [
    './pages-signup.component.scss'
  ]
})
export class PagesSignupComponent implements OnInit {

  events: any = {};

  constructor(public router: Router, private appService: AppService) {
    appService.getState().topnavTitle = 'Sign Up';
    appService.getState().pageFullscreen = true;

    // event handler
    this.events = {
      'facebook': function () {
        //custom code here
      },
      'google': function () {
        //custom code here
      },
      'submit': function () {
        //custom code here
        this.router.navigate(['pages-signin']);
      },
    };
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.appService.getState().pageFullscreen = false;
  }

  /**
   * events trigger handler
   * @param event
   */
  onEvent(event) {
    console.log("click " + event);
    if (this.events)
    {
      this.events[event]();// true handler here please jump to it
    }
  }
}
