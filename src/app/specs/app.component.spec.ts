import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from '../app.component';
import {CounterListComponent} from '../components/counter-list/counter-list.component';
import {CounterDetailComponent} from '../components/counter-detail/counter-detail.component';
import { SuperCounterComponent } from '../components/super-counter/super-counter.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CounterListComponent,
        CounterDetailComponent,
        SuperCounterComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeDefined();
  });

  it(`should have as title 'Super Counters'`, () => {
    expect(app.title).toEqual('Super Counters');
  });

  it('should render title in a h1 tag', () => {
    const appEl = fixture.debugElement.nativeElement;
    expect(appEl.querySelector('h1').textContent).toContain('Super Counters');
  });
});
