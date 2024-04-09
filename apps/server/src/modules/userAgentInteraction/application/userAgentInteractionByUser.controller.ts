import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { UserAgentInteractionDomainFacade } from '@server/modules/userAgentInteraction/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { UserAgentInteractionApplicationEvent } from './userAgentInteraction.application.event'
import { UserAgentInteractionCreateDto } from './userAgentInteraction.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class UserAgentInteractionByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private userAgentInteractionDomainFacade: UserAgentInteractionDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/userAgentInteractions')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.userAgentInteractionDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/userAgentInteractions')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: UserAgentInteractionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item =
      await this.userAgentInteractionDomainFacade.create(valuesUpdated)

    await this.eventService.emit<UserAgentInteractionApplicationEvent.UserAgentInteractionCreated.Payload>(
      UserAgentInteractionApplicationEvent.UserAgentInteractionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
