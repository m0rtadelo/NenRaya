import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './core/game/game.component';
import { GameboardComponent } from './core/gameboard/gameboard.component';
import { ScoreComponent } from './core/score/score.component';
import { ChipComponent } from './core/chip/chip.component';
import { HeaderComponent } from './core/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameboardComponent,
    ScoreComponent,
    ChipComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
