import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitsCompleteComponent } from './habits-complete.component';

describe('HabitsCompleteComponent', () => {
  let component: HabitsCompleteComponent;
  let fixture: ComponentFixture<HabitsCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitsCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitsCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
