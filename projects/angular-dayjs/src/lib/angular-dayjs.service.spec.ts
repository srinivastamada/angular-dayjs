import { TestBed } from '@angular/core/testing';

import { AngularDayjsService } from './angular-dayjs.service';

describe('AngularDayjsService', () => {
  let service: AngularDayjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularDayjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
