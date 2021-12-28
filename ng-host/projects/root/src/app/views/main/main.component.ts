import { Component, OnInit } from '@angular/core';
import microApp from '@micro-zoe/micro-app';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent {
  name = 'ng-client';
  url = 'http://localhost:9999/';
  baseroute = '/main';

  message: string = '';

  constructor() {}

  gotoURL(route: string): void {
    microApp.setData('ng-client', { type: 'route', message: route });
  }

  handleSend(): void {
    microApp.setData('ng-client', { type: 'data', 'message': this.message });
  }
}
