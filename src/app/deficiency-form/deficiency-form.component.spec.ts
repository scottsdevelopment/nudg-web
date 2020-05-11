import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeficiencyFormComponent } from './deficiency-form.component';

describe('DeficiencyFormComponent', () => {
  let component: DeficiencyFormComponent;
  let fixture: ComponentFixture<DeficiencyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeficiencyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeficiencyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
