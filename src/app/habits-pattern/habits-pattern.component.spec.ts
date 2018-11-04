import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitsPatternComponent } from './habits-pattern.component';

describe('HabitsPatternComponent', () => {
  let component: HabitsPatternComponent;
  let fixture: ComponentFixture<HabitsPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitsPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitsPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
