
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../app.service';
import { ZentomicAuthService} from '../../service/zentomic.auth';
import { Http, URLSearchParams, Response} from  "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Router } from '@angular/router'; 
import { ZENTOMIC_SERVICE } from '../../zentomic.service';

declare var auth2: any;

@Component({
  selector: 'lk-pages-signin',
  templateUrl: './pages-signin.component.html',
  styleUrls: [
    './pages-signin.component.scss'
  ]
})

export class PagesSigninComponent implements OnInit, OnDestroy {

  logingoogleurl: string = ZENTOMIC_SERVICE.login_google;
  loginlocalurl: string = ZENTOMIC_SERVICE.login_local;
  //-----------------------------------------------------------------------------------------------------------------------
  user: any = { email: '', password: '' };

  constructor(private appService: AppService, private zentomicAuthService: ZentomicAuthService,private http: Http, private router: Router) {
  
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
    // call node RESTFul service 

    console.log("click facebook");
  }

  clickGoogle() {
    console.log("click click Google");    
      // signInCallback defined in step 6.
    auth2.grantOfflineAccess().then(this.GoogleSignInCallback); 
  }

  clickLogin() {
    console.log("click login");
    var url = this.loginlocalurl.replace("{{email}}", this.user.email).replace("{{password}}", this.user.password);
    var response = this.http.get(url);
    
    response
      .map(response => response.json())
      .subscribe(data => {
      // we've got back the raw data, now generate the core schedule data
      // and save the data for later reference


      console.log(data);

      //-----------
      if (!(data.data == null))
      {
        
        // redirect to main page
        this.loginSuccess(data);
      }
    });

  }

  //---------------------------------------------------------------------------------------------------------------
  public GoogleSignInCallback = (authResult)=>
  {
    console.log("call back " + authResult.code);
    var auth_code = authResult.code;
    if (auth_code)
    {
      // send to node server backend for auth
      let params: URLSearchParams = new URLSearchParams();
      params.set('code', auth_code);

      var url = this.logingoogleurl;
      
      var response = this.http.get(url, { search: params} );

      response
        .map(response => response.json())
        .catch(this.GoogleHandleError)
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          console.log(data);
          //-----------
          if (!(data.data == null)) {
            // push it to service loginer for use later

            // redirect to main page
            this.loginSuccess(data);
          }
        });
    }
  }

  GoogleHandleError(error: Response | any)
  {
    console.log("google login error");
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private loginSuccess = (data) => {
    // put responde data to ZentomicAuthService
    try {
      this.zentomicAuthService.setState("error", data.error);
      this.zentomicAuthService.setState("data", data.data?data.data:data.message);
    }
    catch (e){ }
    // shoudl have the check here before redirect
    

    // redirect if ok 
    this.router.navigate(['/dashboard']);
  }

  //---------------------------------------------------------------------------------------------------------------

}
