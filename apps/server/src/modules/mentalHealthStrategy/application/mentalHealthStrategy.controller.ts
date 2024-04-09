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
  MentalHealthStrategy,
  MentalHealthStrategyDomainFacade,
} from '@server/modules/mentalHealthStrategy/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { MentalHealthStrategyApplicationEvent } from './mentalHealthStrategy.application.event'
import {
  MentalHealthStrategyCreateDto,
  MentalHealthStrategyUpdateDto,
} from './mentalHealthStrategy.dto'

@Controller('/v1/mentalHealthStrategys')
export class MentalHealthStrategyController {
  constructor(
    private eventService: EventService,
    private mentalHealthStrategyDomainFacade: MentalHealthStrategyDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items =
      await this.mentalHealthStrategyDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: MentalHealthStrategyCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.mentalHealthStrategyDomainFacade.create(body)

    await this.eventService.emit<MentalHealthStrategyApplicationEvent.MentalHealthStrategyCreated.Payload>(
      MentalHealthStrategyApplicationEvent.MentalHealthStrategyCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:mentalHealthStrategyId')
  async findOne(
    @Param('mentalHealthStrategyId') mentalHealthStrategyId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.mentalHealthStrategyDomainFacade.findOneByIdOrFail(
      mentalHealthStrategyId,
      queryOptions,
    )

    return item
  }

  @Patch('/:mentalHealthStrategyId')
  async update(
    @Param('mentalHealthStrategyId') mentalHealthStrategyId: string,
    @Body() body: MentalHealthStrategyUpdateDto,
  ) {
    const item = await this.mentalHealthStrategyDomainFacade.findOneByIdOrFail(
      mentalHealthStrategyId,
    )

    const itemUpdated = await this.mentalHealthStrategyDomainFacade.update(
      item,
      body as Partial<MentalHealthStrategy>,
    )
    return itemUpdated
  }

  @Delete('/:mentalHealthStrategyId')
  async delete(
    @Param('mentalHealthStrategyId') mentalHealthStrategyId: string,
  ) {
    const item = await this.mentalHealthStrategyDomainFacade.findOneByIdOrFail(
      mentalHealthStrategyId,
    )

    await this.mentalHealthStrategyDomainFacade.delete(item)

    return item
  }
}
