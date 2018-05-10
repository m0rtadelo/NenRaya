import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'app-datepicker1',
  templateUrl: './datepicker1.component.html',
  styleUrls: ['./datepicker1.component.css']
})
export class Datepicker1Component {
  model: NgbDateStruct;

  constructor(config: NgbDatepickerConfig) {
    // customize default values of datepickers used by this component tree
    config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: now.getFullYear(), month: 12, day: 31};

    // days that don't belong to current month are not visible
    config.outsideDays = 'hidden';
  }

  setDate(date: string) {
    const parts = date.split('-');
    if (parts.length === 3) {
      this.model = { year: +parts[2], month: +parts[1], day: +parts[0] };
    }
  }
  getDate(): string {
    if (this.model) {
      if (this.model.day && this.model.day > 0) {
        return this.model.day + '-' + this.model.month + '-' + this.model.year;
      }
    }
    return '';
  }
}
