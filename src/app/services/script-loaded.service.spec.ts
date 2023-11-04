import { TestBed } from '@angular/core/testing';

import { ScriptLoadedService } from './script-loaded.service';

describe('ScriptLoadedService', () => {
  let service: ScriptLoadedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptLoadedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
