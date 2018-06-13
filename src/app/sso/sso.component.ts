import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Emitter } from '../emitter';
import { BaseComponent } from '../shared/base.component';

@Component({
  selector: 'app-sso',
  templateUrl: './sso.component.html',
  styleUrls: ['./sso.component.css']
})
export class SsoComponent extends BaseComponent implements OnInit {
@ViewChild('pro') pro: ElementRef ;
@ViewChild('num') num: ElementRef ;
@ViewChild('dig') dig: ElementRef ;
  @Input() public value = {
    PRO: '',
    NUM: '',
    DIG: ''
  };
  @Input() public placeholder1 = '';
  @Input() public placeholder2 = '';
  @Input() public placeholder3 = '';
  public resetValue = {PRO: '', NUM: '', DIG: ''};

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.emit();
  }

  public checkValue(id: string, value: string) {
    if (value.indexOf('o') > -1 || (this.mandatory &&
      (
        this.pro.nativeElement.value === '' &&
        this.num.nativeElement.value === '' &&
        this.dig.nativeElement.value === '' ))) {
      this.error = true;
    } else {
      this.value[id] = value;
      this.error = false;
    }
  }
}
