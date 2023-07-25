import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroAbstractDetailComponent } from './intro-abstract-detail.component';

describe('IntroAbstractDetailComponent', () => {
  let component: IntroAbstractDetailComponent;
  let fixture: ComponentFixture<IntroAbstractDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroAbstractDetailComponent]
    });
    fixture = TestBed.createComponent(IntroAbstractDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
