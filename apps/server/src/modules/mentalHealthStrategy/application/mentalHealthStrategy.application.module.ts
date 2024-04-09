import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { MentalHealthStrategyDomainModule } from '../domain'
import { MentalHealthStrategyController } from './mentalHealthStrategy.controller'

@Module({
  imports: [AuthenticationDomainModule, MentalHealthStrategyDomainModule],
  controllers: [MentalHealthStrategyController],
  providers: [],
})
export class MentalHealthStrategyApplicationModule {}
