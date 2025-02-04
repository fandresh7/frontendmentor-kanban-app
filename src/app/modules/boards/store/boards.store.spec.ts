import { TestBed } from '@angular/core/testing'

import { BoardsStore } from './boards.store'

describe('BoardsStore', () => {
  let service: BoardsStore

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(BoardsStore)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
