import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPar = false;
  array = [];
  
  onShowParagraph() {
    this.showPar = !this.showPar;
    this.array.push(this.array.length + 1);
  }
}
