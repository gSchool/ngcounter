import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDetailComponent } from './counter-detail.component';

describe('CounterDetailComponent', () => {
  let component: CounterDetailComponent;
  let fixture: ComponentFixture<CounterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
