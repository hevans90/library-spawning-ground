import { TestBed, inject } from '@angular/core/testing';

import { TwitchTdService } from './twitch-td.service';

describe('TwitchTdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitchTdService]
    });
  });

  it('should be created', inject([TwitchTdService], (service: TwitchTdService) => {
    expect(service).toBeTruthy();
  }));
});
