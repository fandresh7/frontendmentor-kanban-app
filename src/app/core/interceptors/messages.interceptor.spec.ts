import { TestBed } from '@angular/core/testing'
import { HttpInterceptorFn } from '@angular/common/http'

import { messagesInterceptor } from './messages.interceptor'

describe('messagesInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => messagesInterceptor(req, next))

  beforeEach(() => {
    TestBed.configureTestingModule({})
  })

  it('should be created', () => {
    expect(interceptor).toBeTruthy()
  })
})
