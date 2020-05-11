import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeficiencyFormComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateDeficiencyFormComponent;
  let fixture: ComponentFixture<UpdateDeficiencyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDeficiencyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeficiencyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
