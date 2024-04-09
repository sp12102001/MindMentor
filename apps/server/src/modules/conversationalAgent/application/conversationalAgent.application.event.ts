export namespace ConversationalAgentApplicationEvent {
  export namespace ConversationalAgentCreated {
    export const key =
      'conversationalAgent.application.conversationalAgent.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
