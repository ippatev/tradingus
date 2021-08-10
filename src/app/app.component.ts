import { Component } from '@angular/core';

import { ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'tradingus';

  onClick(event: MouseEvent) {}
}
