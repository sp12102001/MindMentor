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
  ConversationalAgent,
  ConversationalAgentDomainFacade,
} from '@server/modules/conversationalAgent/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ConversationalAgentApplicationEvent } from './conversationalAgent.application.event'
import {
  ConversationalAgentCreateDto,
  ConversationalAgentUpdateDto,
} from './conversationalAgent.dto'

@Controller('/v1/conversationalAgents')
export class ConversationalAgentController {
  constructor(
    private eventService: EventService,
    private conversationalAgentDomainFacade: ConversationalAgentDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items =
      await this.conversationalAgentDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: ConversationalAgentCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.conversationalAgentDomainFacade.create(body)

    await this.eventService.emit<ConversationalAgentApplicationEvent.ConversationalAgentCreated.Payload>(
      ConversationalAgentApplicationEvent.ConversationalAgentCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:conversationalAgentId')
  async findOne(
    @Param('conversationalAgentId') conversationalAgentId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.conversationalAgentDomainFacade.findOneByIdOrFail(
      conversationalAgentId,
      queryOptions,
    )

    return item
  }

  @Patch('/:conversationalAgentId')
  async update(
    @Param('conversationalAgentId') conversationalAgentId: string,
    @Body() body: ConversationalAgentUpdateDto,
  ) {
    const item = await this.conversationalAgentDomainFacade.findOneByIdOrFail(
      conversationalAgentId,
    )

    const itemUpdated = await this.conversationalAgentDomainFacade.update(
      item,
      body as Partial<ConversationalAgent>,
    )
    return itemUpdated
  }

  @Delete('/:conversationalAgentId')
  async delete(@Param('conversationalAgentId') conversationalAgentId: string) {
    const item = await this.conversationalAgentDomainFacade.findOneByIdOrFail(
      conversationalAgentId,
    )

    await this.conversationalAgentDomainFacade.delete(item)

    return item
  }
}
