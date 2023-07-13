import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosConocimientosComponent } from './otros-conocimientos.component';

describe('OtrosConocimientosComponent', () => {
  let component: OtrosConocimientosComponent;
  let fixture: ComponentFixture<OtrosConocimientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtrosConocimientosComponent]
    });
    fixture = TestBed.createComponent(OtrosConocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
