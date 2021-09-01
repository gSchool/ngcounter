import { Component, Input, OnInit } from '@angular/core';
import { SuperDuperCounter } from '../../models/super-duper-counter';

@Component({
  selector: 'app-super-duper-counter',
  templateUrl: './super-duper-counter.component.html',
  styleUrls: ['./super-duper-counter.component.css']
})
export class SuperDuperCounterComponent implements OnInit {
  @Input() counter: SuperDuperCounter;

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.counter.start();
  }
}
