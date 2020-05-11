import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDeficiencyFormComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateDeficiencyFormComponent;
  let fixture: ComponentFixture<CreateDeficiencyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDeficiencyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDeficiencyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
