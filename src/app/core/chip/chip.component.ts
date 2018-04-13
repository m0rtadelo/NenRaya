import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Game } from '../model/game.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent implements OnInit {
  @Input() c: number;
  @Input() r: number;
  index = 0;
  state = 0;
  status: Observable<Game>;
  constructor(private store: Store<AppState>) {
    this.status = this.store.select(state => state.game);
  }

  ngOnInit() {
    this.setChipItem();
  }

  incState() {
    if (this.state === 0) {
      this.state++;
//      this.status.subscribe(data => {
        this.store.dispatch({
          type: 'TURN',
          payload: {
            turn: this.index
          }
        });
//      });
    }
  }
  setChipItem() {
    this.status.subscribe(data => {
      this.index = (this.c + (data.gridWidth * this.r));
      return this.index;
    });
  }
}
