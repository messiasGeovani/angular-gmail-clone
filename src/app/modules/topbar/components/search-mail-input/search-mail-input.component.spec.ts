import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMailInputComponent } from './search-mail-input.component';

describe('SearchMailInputComponent', () => {
  let component: SearchMailInputComponent;
  let fixture: ComponentFixture<SearchMailInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMailInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
