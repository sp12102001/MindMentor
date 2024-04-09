import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ConversationalAgentDomainFacade } from './conversationalAgent.domain.facade'
import { ConversationalAgent } from './conversationalAgent.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([ConversationalAgent]),
    DatabaseHelperModule,
  ],
  providers: [ConversationalAgentDomainFacade, ConversationalAgentDomainFacade],
  exports: [ConversationalAgentDomainFacade],
})
export class ConversationalAgentDomainModule {}
