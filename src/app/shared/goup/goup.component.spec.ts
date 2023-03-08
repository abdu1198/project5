import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoupComponent } from './goup.component';

describe('GoupComponent', () => {
  let component: GoupComponent;
  let fixture: ComponentFixture<GoupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
