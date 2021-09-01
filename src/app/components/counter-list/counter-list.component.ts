import { Component, OnInit } from '@angular/core';
import Counter from '../../models/counter';
import SuperCounter from '../../models/super-counter';
import {SuperDuperCounter} from '../../models/super-duper-counter';

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
  superDuperCounters: SuperDuperCounter[] = [];
  name = 'Counter Wall';

  constructor() {}

  ngOnInit() {}

  create() {
    // the nth item will trigger first condition
    if (this.counters.length > 3) {
      this.upgradeCounter();
    } else if (this.superCounters.length > 3) {
      this.upgradeSuperCounter();
    } else {
      const counter = new Counter();
      this.counters.push(counter);
    }
  }

  upgradeCounter() {
    const superCounter = new SuperCounter();
    superCounter.value = this.counters.reduce((acc, curr) => acc + curr.value, 0);
    this.counters = [];
    this.superCounters.push(superCounter);
  }

  upgradeSuperCounter() {
    const superDuperCounter = new SuperDuperCounter();
    superDuperCounter.value = this.superCounters.reduce((acc, curr) => acc + curr.value, 0);
    this.superCounters = [];
    this.superDuperCounters.push(superDuperCounter);
  }
}
