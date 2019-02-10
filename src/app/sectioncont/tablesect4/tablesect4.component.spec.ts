import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablesect4Component } from './tablesect4.component';

describe('Tablesect4Component', () => {
  let component: Tablesect4Component;
  let fixture: ComponentFixture<Tablesect4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tablesect4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tablesect4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
