import { TestBed, inject } from '@angular/core/testing';

import { MovesListService } from './moves-list.service';

describe('MovesListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovesListService]
    });
  });

  it('should be created', inject([MovesListService], (service: MovesListService) => {
    expect(service).toBeTruthy();
  }));
});
