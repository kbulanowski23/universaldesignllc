import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessFormComponent } from './success-form.component';

describe('SuccessFormComponent', () => {
  let component: SuccessFormComponent;
  let fixture: ComponentFixture<SuccessFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessFormComponent]
    });
    fixture = TestBed.createComponent(SuccessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
