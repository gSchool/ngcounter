import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterListComponent } from './counter-list.component';
import { CounterDetailComponent } from '../counter-detail/counter-detail.component';
import { SuperCounterComponent } from '../super-counter/super-counter.component';

describe('CounterListComponent', () => {
  let component: CounterListComponent;
  let fixture: ComponentFixture<CounterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterListComponent, CounterDetailComponent, SuperCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('"Create" button should create a Counter', () => {
    expect(component.counters.length).toEqual(0);
    const buttonEl = fixture.nativeElement.querySelector('button');
    expect(buttonEl).toBeDefined();
    buttonEl.click();
    expect(component.counters.length).toEqual(1);
  });

  it('should combine 6 Counters into 1 Super Counter', () => {
    const buttonEl = fixture.nativeElement.querySelector('button');
    for (let i = 0; i < 6; i++) {
      buttonEl.click();
    }
    fixture.detectChanges();
    const superEl = fixture.nativeElement.querySelector('.superCounter .card-title');
    expect(component.counters.length).toEqual(0);
    expect(component.superCounters.length).toEqual(1);
    // verify element is on the page
    expect(superEl.textContent).toEqual('0');
  });
});
