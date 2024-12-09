import { TestBed } from '@angular/core/testing';

import { DataStorgeService } from './data-storge.service';

describe('DataStorgeService', () => {
  let service: DataStorgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStorgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
