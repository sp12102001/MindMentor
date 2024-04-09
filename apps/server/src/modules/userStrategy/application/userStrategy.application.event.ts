export namespace UserStrategyApplicationEvent {
  export namespace UserStrategyCreated {
    export const key = 'userStrategy.application.userStrategy.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
