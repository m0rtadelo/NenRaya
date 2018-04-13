import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './core/game/game.component';
import { GameboardComponent } from './core/gameboard/gameboard.component';
import { ScoreComponent } from './core/score/score.component';
import { ChipComponent } from './core/chip/chip.component';
import { HeaderComponent } from './core/header/header.component';
import { StoreModule } from '@ngrx/store';
import { gameReducer } from './core/reducers/game.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    BrowserModule,
    StoreModule.forRoot({ game: gameReducer }),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
