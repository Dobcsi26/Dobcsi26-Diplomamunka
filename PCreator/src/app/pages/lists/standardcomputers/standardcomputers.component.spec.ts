import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardcomputersComponent } from './standardcomputers.component';

describe('StandardcomputersComponent', () => {
  let component: StandardcomputersComponent;
  let fixture: ComponentFixture<StandardcomputersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardcomputersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardcomputersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
