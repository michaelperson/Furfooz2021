import { TestBed } from '@angular/core/testing';

import { ClipVideoService } from './clip-video.service';

describe('ClipVideoService', () => {
  let service: ClipVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClipVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
