import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { ConversationalAgent as ConversationalAgentModel } from './conversationalAgent/conversationalAgent.model'

import { MentalHealthStrategy as MentalHealthStrategyModel } from './mentalHealthStrategy/mentalHealthStrategy.model'

import { UserAgentInteraction as UserAgentInteractionModel } from './userAgentInteraction/userAgentInteraction.model'

import { Goal as GoalModel } from './goal/goal.model'

import { Feedback as FeedbackModel } from './feedback/feedback.model'

import { UserStrategy as UserStrategyModel } from './userStrategy/userStrategy.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class ConversationalAgent extends ConversationalAgentModel {}

  export class MentalHealthStrategy extends MentalHealthStrategyModel {}

  export class UserAgentInteraction extends UserAgentInteractionModel {}

  export class Goal extends GoalModel {}

  export class Feedback extends FeedbackModel {}

  export class UserStrategy extends UserStrategyModel {}
}
