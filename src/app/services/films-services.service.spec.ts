import { TestBed } from '@angular/core/testing';

import { FilmsServicesService } from './films-services.service';

describe('FilmsServicesService', () => {
  let service: FilmsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
