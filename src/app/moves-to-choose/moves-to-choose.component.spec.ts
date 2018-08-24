import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovesToChooseComponent } from './moves-to-choose.component';

describe('MovesToChooseComponent', () => {
  let component: MovesToChooseComponent;
  let fixture: ComponentFixture<MovesToChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovesToChooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovesToChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
