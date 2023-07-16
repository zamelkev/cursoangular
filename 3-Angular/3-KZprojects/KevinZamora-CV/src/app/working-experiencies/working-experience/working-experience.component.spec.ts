import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingExperienceComponent } from './working-experience.component';

describe('WorkingExperienceComponent', () => {
  let component: WorkingExperienceComponent;
  let fixture: ComponentFixture<WorkingExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkingExperienceComponent]
    });
    fixture = TestBed.createComponent(WorkingExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
