import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitRecordsComponent } from './habit-records.component';

describe('HabitRecordsComponent', () => {
  let component: HabitRecordsComponent;
  let fixture: ComponentFixture<HabitRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
