import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideRouter, withComponentInputBinding } from '@angular/router'
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http'

import { routes } from './app.routes'
import { messagesInterceptor } from './core/interceptors/messages.interceptor'
import { headersInterceptor } from '@core/interceptors/headers.interceptor'
import { authInterceptor } from '@core/interceptors/auth.interceptor'
import { AuthService } from '@core/services/auth/auth.service'
import { BoardService } from '@core/services/board/board.service'
import { LsBoardService } from '@core/services/board/ls-board.service'
import { BOARD_SERVICE } from '@core/tokens/board.token'
import { ColumnService } from '@core/services/column/column.service'
import { LsColumnService } from '@core/services/column/ls-column.service'
import { LsTaskService } from '@core/services/task/ls-task.service'
import { TaskService } from '@core/services/task/task.service'
import { COLUMN_SERVICE } from '@core/tokens/column.token'
import { TASK_SERVICE } from '@core/tokens/task.token'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch(), withInterceptors([headersInterceptor, authInterceptor, messagesInterceptor])),
    {
      provide: BOARD_SERVICE,
      useFactory: (authService: AuthService, boardService: BoardService, lsBoardService: LsBoardService) => {
        return authService.isDemoAccount() ? lsBoardService : boardService
      },
      deps: [AuthService, BoardService, LsBoardService]
    },
    {
      provide: COLUMN_SERVICE,
      useFactory: (authService: AuthService, columnService: ColumnService, lsColumnService: LsColumnService) => {
        return authService.isDemoAccount() ? lsColumnService : columnService
      },
      deps: [AuthService, ColumnService, LsColumnService]
    },
    {
      provide: TASK_SERVICE,
      useFactory: (authService: AuthService, taskService: TaskService, lsTaskService: LsTaskService) => {
        return authService.isDemoAccount() ? lsTaskService : taskService
      },
      deps: [AuthService, TaskService, LsTaskService]
    }
  ]
}
