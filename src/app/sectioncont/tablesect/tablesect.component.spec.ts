import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesectComponent } from './tablesect.component';

describe('TablesectComponent', () => {
  let component: TablesectComponent;
  let fixture: ComponentFixture<TablesectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
