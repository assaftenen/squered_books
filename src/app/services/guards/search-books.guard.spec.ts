import { TestBed } from '@angular/core/testing';

import { SearchBooksGuard } from './search-books.guard';

describe('SearchBooksGuard', () => {
  let guard: SearchBooksGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SearchBooksGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
