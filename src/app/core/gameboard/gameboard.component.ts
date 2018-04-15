import { Component, OnInit, Input } from '@angular/core';
import { AppState } from './../../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Game } from '../model/game.model';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  panel: number;
  board = [];
  items = [];
  status: Observable<Game>;
  constructor(private store: Store<AppState>) {
    this.status = this.store.select(state => state.game);
  }
  reset() {
    this.store.dispatch({
      type: 'RESET'
    });
    this.board = [];
    this.items = [];
  }
  turn() {
    const value = (<HTMLInputElement>document.getElementById('cell')).value;
    this.store.dispatch({
      type: 'TURN',
      payload: {
        turn: value
      }
    });
  }
  startGame() {
    const value = (<HTMLInputElement>document.getElementById('table')).value;
    this.panel = +value;
    this.store.dispatch({
      type: 'START',
      payload: {
        turn: this.panel
      }
    });
    this.createGameboard();
  }

  createGameboard() {
    this.board = [];
    for (let r = 0; r < this.panel; r++) {
      this.items = [];
      for (let i = 0; i < this.panel; i++) {
        this.items.push(0);
      }
      this.board.push(this.items);
    }
  }
  ngOnInit() {
  }
}
