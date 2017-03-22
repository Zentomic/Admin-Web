import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { ZENTOMIC_SERVICE } from '../../zentomic.service';
import { Http, URLSearchParams, Response} from  "@angular/http";

@Component({
  selector: 'lk-pages-sms',
  templateUrl: './pages-sms.component.html',
  styleUrls: [
    './pages-sms.component.scss'
  ]
})
export class PagesSMSComponent implements OnInit {

  events: any = {};
  sms = {
    tofone: '',
    message: ''
  };

  url_sms: string = ZENTOMIC_SERVICE.SMS;

  //-------------------------------------------------------------------
  constructor(public router: Router, private appService: AppService, private http: Http) {
    appService.getState().topnavTitle = 'SMS';
    appService.getState().pageFullscreen = true;
    var $this = this;
    // event handler
    this.events = {
      'home': function () {
        //custom code here
        $this.router.navigate(['pages-signin']);
      },
      'submit': function () {
        //custom code here
        if ($this.sms.tofone) {
          $this.sendSMS();
        }
        else {
          console.log("Have to have fone number");
        }
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

  //-----------------------------------------------------------------------------------------------------------------
  // sms to system
  sendSMS() {
    console.log("click submit");

    // send to node server backend for auth
    let params: URLSearchParams = new URLSearchParams();
    params.set('tofone', this.sms.tofone);
    params.set('message', this.sms.message);

    var response = this.http.get(this.url_sms, { search: params} );

    response
      .map(response => response.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        console.log(data);

        //-----------
        if (!(data == null)) {

          
          //custom code
        }
      });
  }
}
