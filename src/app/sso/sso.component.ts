import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Emitter } from '../emitter';
import { BaseComponent } from '../shared/base.component';

@Component({
  selector: 'app-sso',
  templateUrl: './sso.component.html',
  styleUrls: ['./sso.component.css']
})
export class SsoComponent extends BaseComponent implements OnInit {

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
    if (value.indexOf('o') > -1) {
      this.error = true;
    } else {
      this.value[id] = value;
      this.error = false;
    }
  }
}
