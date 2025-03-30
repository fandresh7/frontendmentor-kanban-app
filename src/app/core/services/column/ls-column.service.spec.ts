import { TestBed } from '@angular/core/testing'

import { LsColumnService } from './ls-column.service'

describe('LsColumnService', () => {
  let service: LsColumnService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(LsColumnService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
