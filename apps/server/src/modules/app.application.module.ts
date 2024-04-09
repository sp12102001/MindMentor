import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { ConversationalAgentApplicationModule } from './conversationalAgent/application'

import { MentalHealthStrategyApplicationModule } from './mentalHealthStrategy/application'

import { UserAgentInteractionApplicationModule } from './userAgentInteraction/application'

import { GoalApplicationModule } from './goal/application'

import { FeedbackApplicationModule } from './feedback/application'

import { UserStrategyApplicationModule } from './userStrategy/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,

    ConversationalAgentApplicationModule,

    MentalHealthStrategyApplicationModule,

    UserAgentInteractionApplicationModule,

    GoalApplicationModule,

    FeedbackApplicationModule,

    UserStrategyApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
