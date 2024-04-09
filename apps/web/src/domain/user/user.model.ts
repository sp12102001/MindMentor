import { Notification } from '../notification'

import { UserAgentInteraction } from '../userAgentInteraction'

import { Goal } from '../goal'

import { Feedback } from '../feedback'

import { UserStrategy } from '../userStrategy'

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string
  email: string
  status: UserStatus
  name: string
  pictureUrl: string
  password: string
  dateCreated: string
  dateUpdated: string
  notifications?: Notification[]

  userAgentInteractions?: UserAgentInteraction[]

  goals?: Goal[]

  feedbacks?: Feedback[]

  userStrategys?: UserStrategy[]
}
