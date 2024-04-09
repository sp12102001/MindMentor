import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { ConversationalAgentDomainModule } from './conversationalAgent/domain'

import { MentalHealthStrategyDomainModule } from './mentalHealthStrategy/domain'

import { UserAgentInteractionDomainModule } from './userAgentInteraction/domain'

import { GoalDomainModule } from './goal/domain'

import { FeedbackDomainModule } from './feedback/domain'

import { UserStrategyDomainModule } from './userStrategy/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    ConversationalAgentDomainModule,

    MentalHealthStrategyDomainModule,

    UserAgentInteractionDomainModule,

    GoalDomainModule,

    FeedbackDomainModule,

    UserStrategyDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
