import { TestBed } from '@angular/core/testing';

import { JoinedPageSettingsService } from './joined-page-settings.service';

describe('JoinedPageSettingsService', () => {
  let service: JoinedPageSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoinedPageSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
