import { Component, OnInit, Input } from '@angular/core';
import Counter from '../counter';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'counter',
  templateUrl: './counter-detail.component.html',
  styleUrls: ['./counter-detail.component.css']
})
export class CounterDetailComponent implements OnInit {
  // A property binding to pass Counter objects to
  @Input() counter: Counter;
  constructor() {}

  ngOnInit() {
  }

  /**
   * Increase the counter value
   */
  increment() {
    this.counter.value++;
  }

  /**
   * Decrease the counter value
   */
  decrement() {
    this.counter.value--;
  }

}
