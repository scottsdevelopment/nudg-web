import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDropdownComponent } from './policy-dropdown.component';

describe('PolicyDropdownComponent', () => {
  let component: PolicyDropdownComponent;
  let fixture: ComponentFixture<PolicyDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
