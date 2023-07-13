import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaEducativaComponent } from './experiencia-educativa.component';

describe('ExperienciaEducativaComponent', () => {
  let component: ExperienciaEducativaComponent;
  let fixture: ComponentFixture<ExperienciaEducativaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienciaEducativaComponent]
    });
    fixture = TestBed.createComponent(ExperienciaEducativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
