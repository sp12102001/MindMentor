import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { FeedbackDomainModule } from '../domain'
import { FeedbackController } from './feedback.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { FeedbackByUserController } from './feedbackByUser.controller'

@Module({
  imports: [AuthenticationDomainModule, FeedbackDomainModule, UserDomainModule],
  controllers: [FeedbackController, FeedbackByUserController],
  providers: [],
})
export class FeedbackApplicationModule {}
