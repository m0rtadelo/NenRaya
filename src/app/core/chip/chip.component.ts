import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent implements OnInit {
  state = 0;
  constructor() { }

  ngOnInit() {
  }

  incState() {
    this.state++;
  }
}
