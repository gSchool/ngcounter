import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDetailComponent } from './counter-detail.component';
import Counter from '../counter';

describe('CounterDetailComponent', () => {
  let component: CounterDetailComponent;
  let fixture: ComponentFixture<CounterDetailComponent>;
  let counter: Counter;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDetailComponent);
    component = fixture.componentInstance;
    counter = { value: 0 };
    component.counter = counter;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a counter', () => {
    expect(component.counter.value).toEqual(0);
  });

  it('should increment counter', () => {
    component.increment();
    component.increment();
    expect(component.counter.value).toEqual(2);
  });

  it('should decrement counter', () => {
    component.increment();
    component.increment();
    component.decrement();
    expect(component.counter.value).toEqual(1);
  });

  it('should have element', () => {
    const el = fixture.nativeElement.querySelector('.card-title');
    expect(el.textContent).toEqual('0');
  });

  it('should have element', () => {
    const el = fixture.nativeElement.querySelector('.card-title');
    expect(el.textContent).toEqual('0');
  });
});
