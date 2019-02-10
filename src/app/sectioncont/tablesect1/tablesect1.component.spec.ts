import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablesect1Component } from './tablesect1.component';

describe('Tablesect1Component', () => {
  let component: Tablesect1Component;
  let fixture: ComponentFixture<Tablesect1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tablesect1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tablesect1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
