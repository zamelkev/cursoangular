import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDatasComponent } from './contact-datas.component';

describe('ContactDatasComponent', () => {
  let component: ContactDatasComponent;
  let fixture: ComponentFixture<ContactDatasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDatasComponent]
    });
    fixture = TestBed.createComponent(ContactDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
