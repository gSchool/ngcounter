import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterListComponent } from './counter-list.component';
import {CounterDetailComponent} from '../counter-detail/counter-detail.component';

describe('CounterComponent', () => {
  let component: CounterListComponent;
  let fixture: ComponentFixture<CounterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterListComponent, CounterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should create counter', () => {
    expect(component.counters.length).toEqual(0);
    component.create();
    expect(component.counters.length).toEqual(1);
  });
});
