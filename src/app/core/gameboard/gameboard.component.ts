import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  @Input() panel: number;
  board = [];
  items = [];
  constructor() { }

  ngOnInit() {
    for (let r = 0; r < this.panel; r++) {
      this.items = [];
      for (let i = 0; i < this.panel; i++) {
        this.items.push(0);
      }
      this.board.push(this.items);
    }
  }
}
