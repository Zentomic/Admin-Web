import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { MapsGoogleComponent } from '../maps-google/maps-google.component';

@Component({
  selector: 'lk-member-location',
  templateUrl: './member-location.component.html',
  styleUrls: [
    './member-location.component.scss'
  ]
})
export class MemberLocationComponent implements OnInit {

  editing = {};
  rows = TableDataMock.rows;
  temp = [...TableDataMock.rows];

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Member Location';
  }

  ngOnInit() {
  }

  updateValue(event, cell, cellValue, row) {
    this.editing[row.$$index + '-' + cell] = false;
    this.rows[row.$$index][cell] = event.target.value;
  }

  updateFilter(event) {
    let val = event.target.value;
    let temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }

}

/**
 * dummy data
 */
class TableDataMock {
  static rows: any = [
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
     
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    },
    {
      time:"12:00 Jan 1 2017",
      long:'-124.980469',
      lat:'49.774170'
    }
  ];
}
