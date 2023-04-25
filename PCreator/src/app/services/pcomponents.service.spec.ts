import { TestBed } from '@angular/core/testing';

import { PcomponentsService } from './pcomponents.service';

describe('PcomponentsService', () => {
  let service: PcomponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcomponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
