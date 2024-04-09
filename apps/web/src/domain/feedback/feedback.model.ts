import { User } from '../user'

export class Feedback {
  id: string

  content: string

  feedbackDate: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
