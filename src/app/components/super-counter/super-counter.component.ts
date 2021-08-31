import { Component, Input, OnInit } from '@angular/core';
import SuperCounter from '../../models/super-counter';

@Component({
  selector: 'app-super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {
  @Input() counter: SuperCounter;

  constructor() {}

  ngOnInit() {}

  increment() {
    this.counter.increment();
  }

  decrement() {
    this.counter.decrement();
  }
}
