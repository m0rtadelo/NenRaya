import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Emitter } from '../emitter';
import { BaseComponent } from '../shared/base.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent extends BaseComponent implements OnInit {
  @Input() public maxLength = 20;
  @Input() public value = '';
  public resetValue = '';
  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.emit();
  }

  public checkValue(value: string) {
    if (value.indexOf('o') > -1 || (this.mandatory && !!!value)) {
      this.error = true;
    } else {
      this.value = value;
      this.error = false;
    }
  }

}
