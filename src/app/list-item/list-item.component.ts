import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.less'],
})
export class ListItemComponent implements OnInit {
  @Input() title: string | undefined;
  @Input('subtitle') subTitle: string | undefined;

  constructor() {}
  ngOnInit(): void {}
}
