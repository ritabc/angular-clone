import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignedDancesComponent } from './designed-dances.component';

describe('DesignedDancesComponent', () => {
  let component: DesignedDancesComponent;
  let fixture: ComponentFixture<DesignedDancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignedDancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignedDancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
