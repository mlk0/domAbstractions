import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildElementRefComponent } from './view-child-element-ref.component';

describe('ViewChildElementRefComponent', () => {
  let component: ViewChildElementRefComponent;
  let fixture: ComponentFixture<ViewChildElementRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildElementRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildElementRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
