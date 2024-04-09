export namespace MentalHealthStrategyApplicationEvent {
  export namespace MentalHealthStrategyCreated {
    export const key =
      'mentalHealthStrategy.application.mentalHealthStrategy.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
