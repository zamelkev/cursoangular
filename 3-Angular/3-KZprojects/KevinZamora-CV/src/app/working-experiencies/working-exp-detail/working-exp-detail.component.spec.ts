import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingExpDetailComponent } from './working-exp-detail.component';

describe('WorkingExpDetailComponent', () => {
  let component: WorkingExpDetailComponent;
  let fixture: ComponentFixture<WorkingExpDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkingExpDetailComponent]
    });
    fixture = TestBed.createComponent(WorkingExpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
