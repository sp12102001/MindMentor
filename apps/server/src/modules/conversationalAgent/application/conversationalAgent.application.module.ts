import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ConversationalAgentDomainModule } from '../domain'
import { ConversationalAgentController } from './conversationalAgent.controller'

@Module({
  imports: [AuthenticationDomainModule, ConversationalAgentDomainModule],
  controllers: [ConversationalAgentController],
  providers: [],
})
export class ConversationalAgentApplicationModule {}
