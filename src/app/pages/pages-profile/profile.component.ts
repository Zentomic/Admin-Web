import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { ZentomicAuthService} from '../../service/zentomic.auth';

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

  constructor(private appService: AppService, private zentomicAuthService: ZentomicAuthService) {
    appService.getState().topnavTitle = 'Profile';
    this.loadUser();
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
}
