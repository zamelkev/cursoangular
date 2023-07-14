import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalExperienceComponent } from './educational-experience.component';

describe('EducationalExperienceComponent', () => {
  let component: EducationalExperienceComponent;
  let fixture: ComponentFixture<EducationalExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationalExperienceComponent]
    });
    fixture = TestBed.createComponent(EducationalExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
