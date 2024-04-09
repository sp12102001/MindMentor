import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { UserAgentInteractionDomainFacade } from './userAgentInteraction.domain.facade'
import { UserAgentInteraction } from './userAgentInteraction.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([UserAgentInteraction]),
    DatabaseHelperModule,
  ],
  providers: [
    UserAgentInteractionDomainFacade,
    UserAgentInteractionDomainFacade,
  ],
  exports: [UserAgentInteractionDomainFacade],
})
export class UserAgentInteractionDomainModule {}
