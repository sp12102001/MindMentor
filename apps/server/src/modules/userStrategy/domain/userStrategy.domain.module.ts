import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { UserStrategyDomainFacade } from './userStrategy.domain.facade'
import { UserStrategy } from './userStrategy.model'

@Module({
  imports: [TypeOrmModule.forFeature([UserStrategy]), DatabaseHelperModule],
  providers: [UserStrategyDomainFacade, UserStrategyDomainFacade],
  exports: [UserStrategyDomainFacade],
})
export class UserStrategyDomainModule {}
