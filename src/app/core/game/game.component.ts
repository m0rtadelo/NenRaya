import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public panel: number;

  constructor() { }

  ngOnInit() {
    this.panel = 3;
  }

}
