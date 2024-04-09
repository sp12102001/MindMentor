import { User } from '../user'

export class Goal {
  id: string

  description: string

  status: string

  targetDate: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
