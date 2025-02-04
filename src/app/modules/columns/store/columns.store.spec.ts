import { TestBed } from '@angular/core/testing'

import { ColumnsStore } from './columns.store'

describe('ColumnsStore', () => {
  let service: ColumnsStore

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ColumnsStore)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
