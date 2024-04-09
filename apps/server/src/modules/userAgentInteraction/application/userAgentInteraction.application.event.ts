export namespace UserAgentInteractionApplicationEvent {
  export namespace UserAgentInteractionCreated {
    export const key =
      'userAgentInteraction.application.userAgentInteraction.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
