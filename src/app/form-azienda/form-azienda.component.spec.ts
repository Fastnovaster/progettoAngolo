import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAziendaComponent } from './form-azienda.component';

describe('FormAziendaComponent', () => {
  let component: FormAziendaComponent;
  let fixture: ComponentFixture<FormAziendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAziendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAziendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
