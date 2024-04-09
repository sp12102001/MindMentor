import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { UserStrategyDomainFacade } from '@server/modules/userStrategy/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { UserStrategyApplicationEvent } from './userStrategy.application.event'
import { UserStrategyCreateDto } from './userStrategy.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class UserStrategyByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private userStrategyDomainFacade: UserStrategyDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/userStrategys')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.userStrategyDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/userStrategys')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: UserStrategyCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.userStrategyDomainFacade.create(valuesUpdated)

    await this.eventService.emit<UserStrategyApplicationEvent.UserStrategyCreated.Payload>(
      UserStrategyApplicationEvent.UserStrategyCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
