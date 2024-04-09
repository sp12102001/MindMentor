import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { MentalHealthStrategyDomainFacade } from './mentalHealthStrategy.domain.facade'
import { MentalHealthStrategy } from './mentalHealthStrategy.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([MentalHealthStrategy]),
    DatabaseHelperModule,
  ],
  providers: [
    MentalHealthStrategyDomainFacade,
    MentalHealthStrategyDomainFacade,
  ],
  exports: [MentalHealthStrategyDomainFacade],
})
export class MentalHealthStrategyDomainModule {}
