import { Component, OnInit, Injectable, EventEmitter, OnChanges, SimpleChanges, Output, Input } from '@angular/core';
import { NgbDatepickerConfig, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { isNumber, toInteger, padNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-datepicker2',
  templateUrl: './datepicker2.component.html',
  styleUrls: ['./datepicker2.component.css']
})

@Injectable()
export class Datepicker2Component extends NgbDateParserFormatter {
  @Input() model: NgbDateStruct;
  @Output() output = new EventEmitter();

  parse(value: string): NgbDateStruct {
    if (value) {
      const dateParts = value.trim().split('-');
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return { day: toInteger(dateParts[0]), month: null, year: null };
      } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        return { day: toInteger(dateParts[0]), month: toInteger(dateParts[1]), year: null };
      } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        return { day: toInteger(dateParts[0]), month: toInteger(dateParts[1]), year: toInteger(dateParts[2]) };
      }
    }
    return null;
  }
  format(date: NgbDateStruct): string {
    const formattedDate = date ?
      `${isNumber(date.day) ? padNumber(date.day) : ''}-${isNumber(date.month) ? padNumber(date.month) : ''}-${date.year}` :
      '';
      this.output.emit({formattedDate});
      console.log(formattedDate);
      return formattedDate;
  }
  constructor(config: NgbDatepickerConfig) {
    super();
    // customize default values of datepickers used by this component tree
    config.minDate = { year: 1900, month: 1, day: 1 };
    config.maxDate = { year: new Date().getFullYear(), month: 12, day: 31 };

    // days that don't belong to current month are not visible
    config.outsideDays = 'hidden';
  }
}
