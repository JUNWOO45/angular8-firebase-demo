import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  // timer$: Observable<number> = timer(0, 1000);

  everySecond$: Observable<number> = timer(0, 1000);
  everyMinute$: Observable<number> = timer(0, 60000);

  constructor() { }

  ngOnInit() {
    // this.everySecond$.subscribe(second => {
    //   console.log(second);
    // })
    this.subscription.add(this.everySecond$.subscribe(second => console.log(second)));
    this.subscription.add(this.everyMinute$.subscribe(minute => console.log(minute)));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
