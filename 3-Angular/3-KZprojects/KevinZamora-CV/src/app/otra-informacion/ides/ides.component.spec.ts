import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDEsComponent } from './ides.component';

describe('IDEsComponent', () => {
  let component: IDEsComponent;
  let fixture: ComponentFixture<IDEsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IDEsComponent]
    });
    fixture = TestBed.createComponent(IDEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
