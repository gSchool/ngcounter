import { Component, OnInit } from '@angular/core';
import Counter from '../../models/counter';
import SuperCounter from '../../models/super-counter';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  // Declare properties for use
  counters: Counter[] = [];
  superCounters: SuperCounter[] = [];
  name = 'Counter Wall';

  constructor() {}

  ngOnInit() {}

  create() {
    // the 6th item will trigger first condition
    if (this.counters.length === 5) {
      this.upgradeCounter();
    } else {
      const counter = new Counter();
      this.counters.push(counter);
    }
  }

  upgradeCounter() {
    let total = 0;
    for (const counter of this.counters) {
      total += counter.value;
    }
    this.counters = [];
    const superCounter = new SuperCounter();
    superCounter.value = total;
    this.superCounters.push(superCounter);
  }
}
