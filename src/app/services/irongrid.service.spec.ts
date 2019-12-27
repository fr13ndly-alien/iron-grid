import { TestBed } from '@angular/core/testing';

import { IrongridService } from './irongrid.service';

describe('IrongridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IrongridService = TestBed.get(IrongridService);
    expect(service).toBeTruthy();
  });
});
