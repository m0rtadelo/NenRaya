import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Emitter } from './emitter';
import { InputComponent } from './input/input.component';
import { SsoComponent } from './sso/sso.component';

const now = new Date();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChildren(InputComponent) inputComponents: QueryList<InputComponent>;
  @ViewChildren(SsoComponent) ssoComponents: QueryList<SsoComponent>;
  title = 'N en Raya';
  model: NgbDateStruct;
  date: string; //  = `${this.model.year}`;
  check: string;
  values = {/*
    CAM_PFS_NOM: '' ,
    CAM_PFS_APE_1: '',
    CAM_PFS_APE_2: '',
    CAM_PFS_SSO: {
      PRO: '',
      NUM: '',
      DIG: ''
    }*/
  };

  constructor() {
  }

  selectToday() {
    this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
  }
  ngOnInit() {
    this.selectToday();
  }

 checks() {
    console.log('check');
  }

  setValue(value: Emitter) {
    this.values[value.id] = value.data;
  }

  public showResult() {
    console.log(this.values);
  }

  public loadFromMordor() {
    this.values = {
      CAM_PFS_NOM: 'NOM' ,
      // CAM_PFS_APE_1: 'COG1',
      CAM_PFS_APE_2: 'COG2',
      CAM_PFS_SSO: {
        PRO: '11',
        NUM: '22222222',
        DIG: '33'
      }
    };
    this.loadValues(this.values, [this.inputComponents, this.ssoComponents]);
  }

  private loadValues(values, groupComponents) {
    groupComponents.forEach(components => {
      components.forEach(component => {
        component.resetComponent();
        if (values[component.id] !== undefined) {
          component.init(values[component.id]);
        }
      });
    });
  }
}
