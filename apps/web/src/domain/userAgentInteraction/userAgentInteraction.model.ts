import { User } from '../user'

import { ConversationalAgent } from '../conversationalAgent'

export class UserAgentInteraction {
  id: string

  interactionTimestamp: string

  interactionContent: string

  userId: string

  user?: User

  agentId: string

  agent?: ConversationalAgent

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
