import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  ChartErrorEvent,
  ChartMouseLeaveEvent,
  ChartMouseOverEvent,
  ChartSelectionChangedEvent,
  ChartType,
  Column,
  GoogleChartComponent,
} from 'angular-google-charts';

import {
  TuiContextWithImplicit,
  tuiPure,
  TuiStringHandler,
} from '@taiga-ui/cdk';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

interface Python {
  id: number;
  name: string;
}

const ITEMS: ReadonlyArray<Python> = [
  { id: 42, name: 'John Cleese' },
  { id: 237, name: 'Eric Idle' },
  { id: 666, name: 'Michael Palin' },
  { id: 123, name: 'Terry Gilliam' },
  { id: 777, name: 'Terry Jones' },
  { id: 999, name: 'Graham Chapman' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  public ngOnInit(): void {}
}
