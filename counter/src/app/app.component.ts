import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'app';
  counter = 1;
  updateByChild(num: number) {
    this.counter = num;
  }
}
