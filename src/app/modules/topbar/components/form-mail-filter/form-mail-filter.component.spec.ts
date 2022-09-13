import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMailFilterComponent } from './form-mail-filter.component';

describe('FormMailFilterComponent', () => {
  let component: FormMailFilterComponent;
  let fixture: ComponentFixture<FormMailFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMailFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
