import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { UserAgentInteractionDomainFacade } from '@server/modules/userAgentInteraction/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { UserAgentInteractionApplicationEvent } from './userAgentInteraction.application.event'
import { UserAgentInteractionCreateDto } from './userAgentInteraction.dto'

import { ConversationalAgentDomainFacade } from '../../conversationalAgent/domain'

@Controller('/v1/conversationalAgents')
export class UserAgentInteractionByConversationalAgentController {
  constructor(
    private conversationalAgentDomainFacade: ConversationalAgentDomainFacade,

    private userAgentInteractionDomainFacade: UserAgentInteractionDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/agent/:agentId/userAgentInteractions')
  async findManyAgentId(
    @Param('agentId') agentId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.conversationalAgentDomainFacade.findOneByIdOrFail(agentId)

    const items = await this.userAgentInteractionDomainFacade.findManyByAgent(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/agent/:agentId/userAgentInteractions')
  async createByAgentId(
    @Param('agentId') agentId: string,
    @Body() body: UserAgentInteractionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, agentId }

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
