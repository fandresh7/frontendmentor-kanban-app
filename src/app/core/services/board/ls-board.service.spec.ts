import { TestBed } from '@angular/core/testing'

import { LsBoardService } from './ls-board.service'

describe('LsBoardService', () => {
  let service: LsBoardService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(LsBoardService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
