import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabacionComponent } from './grabacion.component';

describe('GrabacionComponent', () => {
  let component: GrabacionComponent;
  let fixture: ComponentFixture<GrabacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrabacionComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrabacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
