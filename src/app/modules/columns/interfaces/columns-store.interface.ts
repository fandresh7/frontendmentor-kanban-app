import { Column } from '@core/models/column.model'

export interface ColumnsState {
  columns: Map<string, Column>
  loading: boolean
  loadedBoardIds: Set<string>
}
