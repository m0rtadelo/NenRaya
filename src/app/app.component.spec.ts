import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GameComponent } from './core/game/game.component';
import { HeaderComponent } from './core/header/header.component';
import { Datepicker2Component } from './core/datepicker2/datepicker2.component';
import { AtxTooltipModule } from '@atx/material';
import { ScoreComponent } from './core/score/score.component';
import { GameboardComponent } from './core/gameboard/gameboard.component';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChipComponent } from './core/chip/chip.component';
import { StoreModule } from '@ngrx/store';
import { gameReducer } from './core/reducers/game.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TestutComponent } from './core/testut/testut.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let debugElement, fixture, component;

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
        TestutComponent
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
        })
      ],
      providers: [
        { provide: NgbDateParserFormatter, useClass: Datepicker2Component }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'N en Raya'`, async(() => {
    expect(component.title).toEqual('N en Raya');
  }));
  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to N en Raya!'
    );
  }));

  it('should exist component <app-testut> when component is rendered', () => {
    const element = getQueryBy('app-testut');
    expect(element).toBeTruthy();
  });

  it('should exist component <app-game> when component is rendered', () => {
    const element = getQueryBy('app-game');
    expect(element).toBeTruthy();
  });

  it('should exist component <atx-tooltip> when component is rendered', () => {
    const element = getQueryBy('atx-tooltip');
    expect(element).toBeTruthy();
  });

  it('should exist component <app-datepicker2> when component is rendered', () => {
    const element = getQueryBy('app-datepicker2');
    expect(element).toBeTruthy();
  });

  function getQueryBy(tag: string) {
    return debugElement.query(By.css(tag));
  }
});
