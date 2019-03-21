import { Component, OnInit } from '@angular/core';
import Counter from '../counter';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  // Declare properties for use
  counters: Counter[];
  constructor() {
    // Define properties for editing
    this.counters = [];
  }

  ngOnInit() {
  }

  /**
   * Create a new counter object
   */
  create() {
    const counter = new Counter();
    this.counters.push(counter);
  }
}

export default CounterListComponent;
