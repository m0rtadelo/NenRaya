import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Emitter } from '../emitter';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() public id = '';
  @Input() public maxLength = 2;
  @Input() public value = '';
  @Input() public placeholder = '';
  @Output() public setValue = new EventEmitter<Emitter>();
  public error = false;

  constructor() {}

  ngOnInit() {
    this.emit();
  }

  public emit() {
    this.setValue.emit({
      id: this.id,
      value: this.value
    });
  }

  public checkValue(value: string) {
    if (value.indexOf('o') > -1) {
      this.error = true;
    } else {
      this.value = value;
      this.error = false;
    }
  }
}
