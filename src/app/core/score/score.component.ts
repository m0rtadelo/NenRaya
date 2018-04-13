import { Component, OnInit, Input } from '@angular/core';
import { AppState } from './../../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Game } from '../model/game.model';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() player: number;
  status: Observable<Game>;
  constructor(private store: Store<AppState>) {
    this.status = this.store.select(state => state.game);
  }

  ngOnInit() {
  }

}
