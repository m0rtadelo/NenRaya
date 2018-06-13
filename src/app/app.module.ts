import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { GameComponent } from './core/game/game.component';
import { GameboardComponent } from './core/gameboard/gameboard.component';
import { ScoreComponent } from './core/score/score.component';
import { ChipComponent } from './core/chip/chip.component';
import { HeaderComponent } from './core/header/header.component';
import { StoreModule } from '@ngrx/store';
import { gameReducer } from './core/reducers/game.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {NgbModule, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { Datepicker1Component } from './core/datepicker1/datepicker1.component';
import { Datepicker2Component } from './core/datepicker2/datepicker2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestutComponent } from './core/testut/testut.component';
import { InputModule } from './input/input.module';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameboardComponent,
    ScoreComponent,
    ChipComponent,
    HeaderComponent,
    Datepicker1Component,
    Datepicker2Component,
    TestutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    NgbModule.forRoot(),
    StoreModule.forRoot({ game: gameReducer }),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [{provide: NgbDateParserFormatter, useClass: Datepicker2Component}],
  bootstrap: [AppComponent]
})
export class AppModule { }
