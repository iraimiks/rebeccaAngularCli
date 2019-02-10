import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapmoduleComponent } from './mapmodule.component';

describe('MapmoduleComponent', () => {
  let component: MapmoduleComponent;
  let fixture: ComponentFixture<MapmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
