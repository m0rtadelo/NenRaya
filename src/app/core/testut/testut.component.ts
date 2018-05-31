import { Component } from '@angular/core';

@Component({
  selector: 'app-testut',
  templateUrl: './testut.component.html',
  styleUrls: ['./testut.component.css']
})
export class TestutComponent {
  public result = 0;

  public add(input): void {
    this.result += +input.value;
    input.value = '';
  }
}
