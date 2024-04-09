import { UserAgentInteraction } from '../userAgentInteraction'

export class ConversationalAgent {
  id: string

  name: string

  version: string

  type: string

  costModel: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  userAgentInteractionsAsAgent?: UserAgentInteraction[]
}
