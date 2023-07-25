import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroAbstractComponent } from './intro-abstract.component';

describe('IntroAbstractComponent', () => {
  let component: IntroAbstractComponent;
  let fixture: ComponentFixture<IntroAbstractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroAbstractComponent]
    });
    fixture = TestBed.createComponent(IntroAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
