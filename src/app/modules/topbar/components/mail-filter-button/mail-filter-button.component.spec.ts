import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailFilterButtonComponent } from './mail-filter-button.component';

describe('MailFilterButtonComponent', () => {
  let component: MailFilterButtonComponent;
  let fixture: ComponentFixture<MailFilterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailFilterButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailFilterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
