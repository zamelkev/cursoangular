import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesFormComponent } from './coches-form.component';

describe('CochesFormComponent', () => {
  let component: CochesFormComponent;
  let fixture: ComponentFixture<CochesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CochesFormComponent]
    });
    fixture = TestBed.createComponent(CochesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
