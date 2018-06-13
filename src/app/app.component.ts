import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'N en Raya';
  model: NgbDateStruct;
  date: string; //  = `${this.model.year}`;
  check: string;
  values = {
    CAM_PFS_NOM: '' ,
    CAM_PFS_APE_1: '',
    CAM_PFS_APE_2: '',
    CAM_PFS_MADRE: '',
    CAM_PFS_SSO: {
      PRO: '',
      NUM: '',
      DIG: ''
    }
  };
  selectToday() {
    this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
  }
  ngOnInit() {
    this.selectToday();
  }

  checks() {
    console.log('check');
  }

  setValue(value) {
    this.values[value.id] = value.value;
  }
}
