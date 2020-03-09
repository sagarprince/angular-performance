import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-performance';
  today: number = Date.now();
  show: boolean = false;

  getDate(i): number {
    return this.today + (86400 * 1000) * i;
  }

  trackByFn(index: number): number {
    return index;
  }

  showResults(): void {
    this.show = !this.show;
  }
}
