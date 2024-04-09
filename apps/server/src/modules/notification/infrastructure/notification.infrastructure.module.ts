import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationConversationalAgentSubscriber } from './subscribers/notification.conversationalAgent.subscriber'

import { NotificationMentalHealthStrategySubscriber } from './subscribers/notification.mentalHealthStrategy.subscriber'

import { NotificationUserAgentInteractionSubscriber } from './subscribers/notification.userAgentInteraction.subscriber'

import { NotificationGoalSubscriber } from './subscribers/notification.goal.subscriber'

import { NotificationFeedbackSubscriber } from './subscribers/notification.feedback.subscriber'

import { NotificationUserStrategySubscriber } from './subscribers/notification.userStrategy.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationConversationalAgentSubscriber,

    NotificationMentalHealthStrategySubscriber,

    NotificationUserAgentInteractionSubscriber,

    NotificationGoalSubscriber,

    NotificationFeedbackSubscriber,

    NotificationUserStrategySubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
