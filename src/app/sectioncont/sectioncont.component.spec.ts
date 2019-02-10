import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectioncontComponent } from './sectioncont.component';

describe('SectioncontComponent', () => {
  let component: SectioncontComponent;
  let fixture: ComponentFixture<SectioncontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectioncontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectioncontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
