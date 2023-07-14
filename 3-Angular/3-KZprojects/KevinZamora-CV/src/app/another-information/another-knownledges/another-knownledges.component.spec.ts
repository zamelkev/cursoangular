import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherKnownledgesComponent } from './another-knownledges.component';

describe('AnotherKnownledgesComponent', () => {
  let component: AnotherKnownledgesComponent;
  let fixture: ComponentFixture<AnotherKnownledgesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnotherKnownledgesComponent]
    });
    fixture = TestBed.createComponent(AnotherKnownledgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
