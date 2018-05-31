import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { TestutComponent } from './testut.component';
import { DebugElement } from '@angular/core';

describe('TestutComponent', () => {
    let component, fixture, debugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
            ],
            declarations: [
                TestutComponent,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(TestutComponent);
        debugElement = fixture.debugElement;
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should exist component when module is compiled', () => {
        expect(component).toBeTruthy();
    });

    it('should show html elements (<input> <button> <div>) in visible state', () => {
      expect(isHidden(getQuerySelector('input'))).toBeFalsy('the <input> is not visible');
      expect(isHidden(getQuerySelector('button'))).toBeFalsy('the <button> is not visible');
      expect(isHidden(getQuerySelector('div'))).toBeFalsy('the <div> is not visible');
    });

    it('should have 0 as result value and void input when init', () => {
      const element = getQuerySelector('div');
      expect(+element.innerHTML).toBe(0);
      expect(getQuerySelector('input').value).toBe('');
    });

    it('should clear input value when button is clicked', () => {
      getQuerySelector('input').value = '5';
      click(getQuerySelector('button'));
      fixture.detectChanges();
      expect(getQuerySelector('input').value).toBe('');
    });

    it('should sum entered values when user clicks button', () => {
      const result = getQuerySelector('div');
      getQuerySelector('input').value = '5';
      click(getQuerySelector('button'));
      fixture.detectChanges();
      expect(+result.innerHTML).toBe(5);
      getQuerySelector('input').value = '3';
      click(getQuerySelector('button'));
      fixture.detectChanges();
      expect(+result.innerHTML).toBe(8);
    });

    /** Returns HTMLElement form fixture */
    function getQuerySelector(tag: string) {
      return fixture.nativeElement.querySelector(tag);
    }

  /** Simulate element click. Defaults to mouse left-button click event. */
  function click(el: DebugElement | HTMLElement): void {
    if (el instanceof HTMLElement) {
      el.click();
    } else {
      el.triggerEventHandler('click', { button: 0 });
    }
  }

  /** Where el is the DOM element you'd like to test for visibility */
  function isHidden(el) {
   return (el.offsetParent === null);
  }

});
