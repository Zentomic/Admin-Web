import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { ZENTOMIC_SERVICE } from '../../zentomic.service';
import { Http, URLSearchParams, Response} from  "@angular/http";

@Component({
  selector: 'lk-pages-signup',
  templateUrl: './pages-signup.component.html',
  styleUrls: [
    './pages-signup.component.scss'
  ]
})
export class PagesSignupComponent implements OnInit {

  events: any = {};
  user = {
    fullname: '',
    email: '',
    password: '',
    agreement: false
  };

  url_signup: string = ZENTOMIC_SERVICE.sign_up;

  //-------------------------------------------------------------------
  constructor(public router: Router, private appService: AppService, private http: Http) {
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
    var $this = this;
    this.events = {
      "submit": function ()
      {
        if($this.user.agreement) {
          $this.SignUp();
        }
        else
        {
          console.log(" have to check agreement policy");
        }
      }
    };
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


  // signup to system
  SignUp() {
    console.log("click submit");


    // send to node server backend for auth
    let params: URLSearchParams = new URLSearchParams();
    params.set('email', this.user.email);
    params.set('fullname', this.user.fullname);
    params.set('password', this.user.password);

    var response = this.http.post(ZENTOMIC_SERVICE.sign_up, { search: params} );



    response
      .map(response => response.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference


        console.log(data);

        //-----------
        if (!(data == null)) {

          // redirect to main page
          this.router.navigate(['/pages-signin']);
        }
      });
  }
}
