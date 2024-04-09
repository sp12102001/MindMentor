import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { UserStrategyDomainModule } from '../domain'
import { UserStrategyController } from './userStrategy.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { UserStrategyByUserController } from './userStrategyByUser.controller'

import { MentalHealthStrategyDomainModule } from '../../../modules/mentalHealthStrategy/domain'

import { UserStrategyByMentalHealthStrategyController } from './userStrategyByMentalHealthStrategy.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    UserStrategyDomainModule,

    UserDomainModule,

    MentalHealthStrategyDomainModule,
  ],
  controllers: [
    UserStrategyController,

    UserStrategyByUserController,

    UserStrategyByMentalHealthStrategyController,
  ],
  providers: [],
})
export class UserStrategyApplicationModule {}
