// bar-chart.component.ts
import { Component } from '@angular/core';
import {
  IBarChartOptions,
  IChartistAnimationOptions,
  IChartistData,
} from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';

@Component({
  selector: 'app-bar-chart',
  template: `
    <x-chartist
      [type]="type"
      [data]="data"
      [options]="options"
      [events]="events"
    ></x-chartist>
  `,
  styles: [
    `
      :host {
        width: 100%;
        height: 300px;
      }
    `,
  ],
})
export class BarChartComponent {
  type: ChartType = 'Line';
  data: IChartistData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    series: [
      [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
      [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4],
    ],
  };

  options: IBarChartOptions = {
    axisX: {
      showGrid: false,
    },
    height: 300,
  };

  events: ChartEvent = {
    draw: (data) => {
      console.log(data.type);
      if (data.type === 'line') {
        data.element.animate({
          y2: <IChartistAnimationOptions>{
            dur: '0.5s',
            from: data.y1,
            to: data.y2,
            easing: 'easeOutQuad',
          },
        });
      }
    },
  };
}
