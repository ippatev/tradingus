import { Component, OnInit } from '@angular/core';

import { ChangeDetectionStrategy } from '@angular/core';
import { defineCustomElement } from 'vue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'tradingus';

  constructor() {}

  ngOnInit(): void {}

  onClick(event: MouseEvent) {}
}
