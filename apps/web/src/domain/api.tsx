import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { ConversationalAgentApi } from './conversationalAgent/conversationalAgent.api'

import { MentalHealthStrategyApi } from './mentalHealthStrategy/mentalHealthStrategy.api'

import { UserAgentInteractionApi } from './userAgentInteraction/userAgentInteraction.api'

import { GoalApi } from './goal/goal.api'

import { FeedbackApi } from './feedback/feedback.api'

import { UserStrategyApi } from './userStrategy/userStrategy.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class ConversationalAgent extends ConversationalAgentApi {}

  export class MentalHealthStrategy extends MentalHealthStrategyApi {}

  export class UserAgentInteraction extends UserAgentInteractionApi {}

  export class Goal extends GoalApi {}

  export class Feedback extends FeedbackApi {}

  export class UserStrategy extends UserStrategyApi {}
}
