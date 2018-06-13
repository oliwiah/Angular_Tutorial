import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalStarted(givenNumber: number) {
    if (givenNumber % 2 === 0) {
      this.evenNumbers.push(givenNumber);
    } else {
      this.oddNumbers.push(givenNumber);
    }
  }
}
