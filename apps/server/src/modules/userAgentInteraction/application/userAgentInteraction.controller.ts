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
  UserAgentInteraction,
  UserAgentInteractionDomainFacade,
} from '@server/modules/userAgentInteraction/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { UserAgentInteractionApplicationEvent } from './userAgentInteraction.application.event'
import {
  UserAgentInteractionCreateDto,
  UserAgentInteractionUpdateDto,
} from './userAgentInteraction.dto'

@Controller('/v1/userAgentInteractions')
export class UserAgentInteractionController {
  constructor(
    private eventService: EventService,
    private userAgentInteractionDomainFacade: UserAgentInteractionDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items =
      await this.userAgentInteractionDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: UserAgentInteractionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.userAgentInteractionDomainFacade.create(body)

    await this.eventService.emit<UserAgentInteractionApplicationEvent.UserAgentInteractionCreated.Payload>(
      UserAgentInteractionApplicationEvent.UserAgentInteractionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:userAgentInteractionId')
  async findOne(
    @Param('userAgentInteractionId') userAgentInteractionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.userAgentInteractionDomainFacade.findOneByIdOrFail(
      userAgentInteractionId,
      queryOptions,
    )

    return item
  }

  @Patch('/:userAgentInteractionId')
  async update(
    @Param('userAgentInteractionId') userAgentInteractionId: string,
    @Body() body: UserAgentInteractionUpdateDto,
  ) {
    const item = await this.userAgentInteractionDomainFacade.findOneByIdOrFail(
      userAgentInteractionId,
    )

    const itemUpdated = await this.userAgentInteractionDomainFacade.update(
      item,
      body as Partial<UserAgentInteraction>,
    )
    return itemUpdated
  }

  @Delete('/:userAgentInteractionId')
  async delete(
    @Param('userAgentInteractionId') userAgentInteractionId: string,
  ) {
    const item = await this.userAgentInteractionDomainFacade.findOneByIdOrFail(
      userAgentInteractionId,
    )

    await this.userAgentInteractionDomainFacade.delete(item)

    return item
  }
}
