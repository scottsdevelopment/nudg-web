import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyPercentBoxComponent } from './policy-percent-box.component';

describe('PolicyPercentBoxComponent', () => {
  let component: PolicyPercentBoxComponent;
  let fixture: ComponentFixture<PolicyPercentBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyPercentBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyPercentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
