import { AppService } from './../../app.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.less'],
})
export class OneComponent implements OnInit, OnDestroy {
  message!: string;
  data$$!: Subscription;

  constructor(private appService: AppService) {}

  ngOnDestroy(): void {
    console.log('ng-client one component ngOnDestroy...');
    this.data$$.unsubscribe();
  }

  ngOnInit(): void {
    console.log('ng-client one component ngOnInit...');
    this.data$$ = this.appService.getData$().subscribe((data) => {
      console.log('接收的数据:', data);
      this.message = JSON.stringify(data);
    });
  }

  handleChange(): void {
    this.message = Math.random().toLocaleString();
  }
}
