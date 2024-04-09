import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  UserStrategy,
  UserStrategyDomainFacade,
} from '@server/modules/userStrategy/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { UserStrategyApplicationEvent } from './userStrategy.application.event'
import {
  UserStrategyCreateDto,
  UserStrategyUpdateDto,
} from './userStrategy.dto'

@Controller('/v1/userStrategys')
export class UserStrategyController {
  constructor(
    private eventService: EventService,
    private userStrategyDomainFacade: UserStrategyDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.userStrategyDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: UserStrategyCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.userStrategyDomainFacade.create(body)

    await this.eventService.emit<UserStrategyApplicationEvent.UserStrategyCreated.Payload>(
      UserStrategyApplicationEvent.UserStrategyCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:userStrategyId')
  async findOne(
    @Param('userStrategyId') userStrategyId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.userStrategyDomainFacade.findOneByIdOrFail(
      userStrategyId,
      queryOptions,
    )

    return item
  }

  @Patch('/:userStrategyId')
  async update(
    @Param('userStrategyId') userStrategyId: string,
    @Body() body: UserStrategyUpdateDto,
  ) {
    const item =
      await this.userStrategyDomainFacade.findOneByIdOrFail(userStrategyId)

    const itemUpdated = await this.userStrategyDomainFacade.update(
      item,
      body as Partial<UserStrategy>,
    )
    return itemUpdated
  }

  @Delete('/:userStrategyId')
  async delete(@Param('userStrategyId') userStrategyId: string) {
    const item =
      await this.userStrategyDomainFacade.findOneByIdOrFail(userStrategyId)

    await this.userStrategyDomainFacade.delete(item)

    return item
  }
}
