import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { UserStrategyDomainFacade } from '@server/modules/userStrategy/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { UserStrategyApplicationEvent } from './userStrategy.application.event'
import { UserStrategyCreateDto } from './userStrategy.dto'

import { MentalHealthStrategyDomainFacade } from '../../mentalHealthStrategy/domain'

@Controller('/v1/mentalHealthStrategys')
export class UserStrategyByMentalHealthStrategyController {
  constructor(
    private mentalHealthStrategyDomainFacade: MentalHealthStrategyDomainFacade,

    private userStrategyDomainFacade: UserStrategyDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/strategy/:strategyId/userStrategys')
  async findManyStrategyId(
    @Param('strategyId') strategyId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.mentalHealthStrategyDomainFacade.findOneByIdOrFail(strategyId)

    const items = await this.userStrategyDomainFacade.findManyByStrategy(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/strategy/:strategyId/userStrategys')
  async createByStrategyId(
    @Param('strategyId') strategyId: string,
    @Body() body: UserStrategyCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, strategyId }

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
