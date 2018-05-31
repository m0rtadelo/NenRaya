import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Game } from '../model/game.model';
import { Store, StoreModule } from '@ngrx/store';

import { ChipComponent } from './chip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { gameReducer } from '../reducers/game.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

describe('ChipComponent', () => {
  let component: ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({ game: gameReducer }),
        // Instrumentation must be imported after importing StoreModule (config is optional)
        StoreDevtoolsModule.instrument({
          maxAge: 25
        }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
