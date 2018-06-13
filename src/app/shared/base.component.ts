import { Emitter } from '../emitter';
import { Output, EventEmitter, Input, OnInit } from '@angular/core';

export class BaseComponent implements OnInit {

  public error: boolean;
  @Input() public disabled = false;
  @Input() public mandatory = false;
  @Input() public id: string;
  @Input() public value: any;
  @Input() public placeholder: string;
  @Output() public setValue = new EventEmitter<Emitter>();
  public resetValue: any;

  public originalValue: any;

  ngOnInit() {
    this.originalValue = this.value;
  }

  public emit() {
    if (!this.error) {
      this.setValue.emit({
        id: this.id,
        data: this.value
      });
    }
  }

  public init(value) {
      this.value = value;
      this.originalValue = value;
  }

  public resetComponent(): void {
    this.init(this.resetValue);
  }
}
