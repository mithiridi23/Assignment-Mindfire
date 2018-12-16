import { TestBed } from '@angular/core/testing';

import { FetchDataApiService } from './fetch-data-api.service';

describe('FetchDataApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchDataApiService = TestBed.get(FetchDataApiService);
    expect(service).toBeTruthy();
  });
});
