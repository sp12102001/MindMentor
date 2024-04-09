import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { UserAgentInteractionDomainModule } from '../domain'
import { UserAgentInteractionController } from './userAgentInteraction.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { UserAgentInteractionByUserController } from './userAgentInteractionByUser.controller'

import { ConversationalAgentDomainModule } from '../../../modules/conversationalAgent/domain'

import { UserAgentInteractionByConversationalAgentController } from './userAgentInteractionByConversationalAgent.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    UserAgentInteractionDomainModule,

    UserDomainModule,

    ConversationalAgentDomainModule,
  ],
  controllers: [
    UserAgentInteractionController,

    UserAgentInteractionByUserController,

    UserAgentInteractionByConversationalAgentController,
  ],
  providers: [],
})
export class UserAgentInteractionApplicationModule {}
