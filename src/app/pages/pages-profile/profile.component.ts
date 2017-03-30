import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Http, URLSearchParams, Response, Headers} from  "@angular/http";
import { ZentomicAuthService} from '../../service/zentomic.auth';
import { ZENTOMIC_SERVICE } from '../../zentomic.service';

@Component({
  selector: 'lk-profile',
  templateUrl: './profile.component.html',
  styleUrls: [
    './profile.component.scss'
  ]
})
export class PagesProfileComponent implements OnInit {

  //data
  user: any = {};
  notifier: any = {Fullname:"", Fone:"", Email:""};
  events: any = {};
  // link 
  url_get_notifier: string = ZENTOMIC_SERVICE.get_notifier;
  url_save_notifier: string = ZENTOMIC_SERVICE.create_notifier;
  url_checkin: string = ZENTOMIC_SERVICE.checkin;
    //---------------------------------------------------------------------------------------------
  constructor(private appService: AppService, private zentomicAuthService: ZentomicAuthService, private http: Http) {
    appService.getState().topnavTitle = 'Profile';
    this.loadUser();
    this.loadNotifier();
    var $this = this;
    // event handler
    this.events = {
      
      'save': function () {
        $this.notifier.fromuser = $this.user.email;
        $this.notifier.type = "sms";

        //custom code here
        $this.save();
      },
      'checkin': function () {
        $this.checkin();
      }
    };

  }

  ngOnInit() {
  }


  loadUser = () =>
  {
    let d = this.zentomicAuthService.getState('data').data;

    if (d.hasOwnProperty('local'))
      this.user = d.local;
    else
      this.user = d;

 
  }

  loadNotifier = () => {
    //get notifier of current user
    console.log("load notifier");
    var url = this.url_get_notifier;
    var cred = "?fromuser={{fromuser}}";
    url = url + cred.replace("{{fromuser}}", this.user.email);

    var response = this.http.get(url);

    response
      .map(response => response.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference

        console.log(data);

        //-----------
        if (!(data == null)) {
          //custom code
          this.notifier = data.data.Info;
        }
      });
  }
  save = () => {
    console.log("click save");
    var url = this.url_save_notifier;
    var cred = "fromuser={{fromuser}}&fullname={{fullname}}&fone={{fone}}&email={{email}}&type={{type}}";
    cred = cred.replace("{{fromuser}}", this.user.email);
    cred = cred.replace("{{fullname}}", this.notifier.Fullname);
    cred = cred.replace("{{fone}}", this.notifier.Fone);
    cred = cred.replace("{{email}}", this.notifier.Email);
    cred = cred.replace("{{type}}", this.notifier.type);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    var response = this.http.post(url, cred, {
      headers: headers
    });

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


  checkin = () => {
    //get notifier of current user
    console.log("check in");
    var url = this.url_checkin;
    var cred = "?email={{email}}";
    url = url + cred.replace("{{email}}", this.user.email);

    var response = this.http.get(url);

    response
      .map(response => response.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference

        console.log(data);

        //-----------
        if (!(data == null)) {
          //custom code
          //this.notifier = data.data.Info;
        }
      });
  }

  /**
 * events trigger handler
 * @param event
 */
  onEvent(event) {
    console.log("click " + event);
    if (this.events) {
      this.events[event]();// true handler here please jump to it
    }
  }
}
