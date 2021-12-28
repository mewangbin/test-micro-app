import { AppService } from './app.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'root';

  constructor(private router: Router, private appService: AppService) {}

  ngOnDestroy(): void {
    console.log('ng-client AppComponent ngOnDestroy...');
    window.microApp?.removeDataListener(() => {});
  }

  ngOnInit(): void {
    console.log('ng-client AppComponent ngOnInit...');
    window.microApp?.addDataListener((data: Record<string, unknown>) => {
      if (data.type) {
        // 路由
        if (data.type === 'route') {
          if (data.message && data.message !== this.router.url) {
            this.router.navigate([data.message]);
          }
        } else {
          // 其他数据
          this.appService.setData(data);
        }
      }
    });
  }
}
