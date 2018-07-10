import { TestBed, inject } from '@angular/core/testing';

import { Select3dService } from './select3d.service';

describe('Select3dService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Select3dService]
    });
  });

  it('should be created', inject([Select3dService], (service: Select3dService) => {
    expect(service).toBeTruthy();
  }));
});
