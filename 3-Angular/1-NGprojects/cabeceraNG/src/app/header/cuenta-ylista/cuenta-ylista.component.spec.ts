import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaYListaComponent } from './cuenta-ylista.component';

describe('CuentaYListaComponent', () => {
  let component: CuentaYListaComponent;
  let fixture: ComponentFixture<CuentaYListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentaYListaComponent]
    });
    fixture = TestBed.createComponent(CuentaYListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
