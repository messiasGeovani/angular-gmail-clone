import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchMailComponent } from './form-search-mail.component';

describe('FormSearchMailComponent', () => {
  let component: FormSearchMailComponent;
  let fixture: ComponentFixture<FormSearchMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSearchMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
