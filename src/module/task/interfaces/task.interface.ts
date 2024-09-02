export interface Task {
  id: number
  description: string
  isComplex: boolean
  trackedTime: number
  completedAt?: Date
  subTask?: Task[]
}
