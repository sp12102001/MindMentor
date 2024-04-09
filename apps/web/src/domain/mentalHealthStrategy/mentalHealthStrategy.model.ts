import { UserStrategy } from '../userStrategy'

export class MentalHealthStrategy {
  id: string

  name: string

  type: string

  description: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  userStrategysAsStrategy?: UserStrategy[]
}
