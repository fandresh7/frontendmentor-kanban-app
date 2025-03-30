import { TestBed } from '@angular/core/testing'

import { LsTaskService } from './ls-task.service'

describe('LsTaskService', () => {
  let service: LsTaskService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(LsTaskService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
