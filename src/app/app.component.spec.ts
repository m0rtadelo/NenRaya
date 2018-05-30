import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GameComponent } from './core/game/game.component';
import { HeaderComponent } from './core/header/header.component';
import { Datepicker2Component } from './core/datepicker2/datepicker2.component';
import { AtxTooltipModule } from '@atx/material';
import { ScoreComponent } from './core/score/score.component';
import { GameboardComponent } from './core/gameboard/gameboard.component';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChipComponent } from './core/chip/chip.component';
import { StoreModule } from '@ngrx/store';
import { gameReducer } from './core/reducers/game.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GameComponent,
        HeaderComponent,
        Datepicker2Component,
        ScoreComponent,
        GameboardComponent,
        ChipComponent,
      ],
      imports: [
        AtxTooltipModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({ game: gameReducer }),
        // Instrumentation must be imported after importing StoreModule (config is optional)
        StoreDevtoolsModule.instrument({
          maxAge: 25
        }),
      ],
      providers: [{provide: NgbDateParserFormatter, useClass: Datepicker2Component}]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'N en Raya'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('N en Raya');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to N en Raya!');
  }));
});
