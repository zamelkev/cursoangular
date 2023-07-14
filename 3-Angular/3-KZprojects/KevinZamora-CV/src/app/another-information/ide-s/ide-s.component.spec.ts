import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeSComponent } from './ide-s.component';

describe('IdeSComponent', () => {
  let component: IdeSComponent;
  let fixture: ComponentFixture<IdeSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdeSComponent]
    });
    fixture = TestBed.createComponent(IdeSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
