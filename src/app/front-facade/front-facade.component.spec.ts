import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontFacadeComponent } from './front-facade.component';

describe('FrontFacadeComponent', () => {
  let component: FrontFacadeComponent;
  let fixture: ComponentFixture<FrontFacadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontFacadeComponent]
    });
    fixture = TestBed.createComponent(FrontFacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
