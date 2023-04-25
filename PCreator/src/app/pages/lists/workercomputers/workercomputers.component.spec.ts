import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkercomputersComponent } from './workercomputers.component';

describe('WorkercomputersComponent', () => {
  let component: WorkercomputersComponent;
  let fixture: ComponentFixture<WorkercomputersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkercomputersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkercomputersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
