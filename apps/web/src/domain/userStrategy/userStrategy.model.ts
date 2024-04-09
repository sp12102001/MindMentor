import { User } from '../user'

import { MentalHealthStrategy } from '../mentalHealthStrategy'

export class UserStrategy {
  id: string

  startDate: string

  endDate?: string

  status: string

  userId: string

  user?: User

  strategyId: string

  strategy?: MentalHealthStrategy

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
