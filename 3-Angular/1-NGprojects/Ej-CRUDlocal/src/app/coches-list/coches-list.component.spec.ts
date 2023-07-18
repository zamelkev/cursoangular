import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesListComponent } from './coches-list.component';

describe('CochesListComponent', () => {
  let component: CochesListComponent;
  let fixture: ComponentFixture<CochesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CochesListComponent]
    });
    fixture = TestBed.createComponent(CochesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
