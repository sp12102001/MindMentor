import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { UserAgentInteraction } from './userAgentInteraction.model'

import { User } from '../../user/domain'

import { ConversationalAgent } from '../../conversationalAgent/domain'

@Injectable()
export class UserAgentInteractionDomainFacade {
  constructor(
    @InjectRepository(UserAgentInteraction)
    private repository: Repository<UserAgentInteraction>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<UserAgentInteraction>,
  ): Promise<UserAgentInteraction> {
    return this.repository.save(values)
  }

  async update(
    item: UserAgentInteraction,
    values: Partial<UserAgentInteraction>,
  ): Promise<UserAgentInteraction> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: UserAgentInteraction): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<UserAgentInteraction> = {},
  ): Promise<UserAgentInteraction[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<UserAgentInteraction> = {},
  ): Promise<UserAgentInteraction> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByUser(
    item: User,
    queryOptions: RequestHelper.QueryOptions<UserAgentInteraction> = {},
  ): Promise<UserAgentInteraction[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('user')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        userId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByAgent(
    item: ConversationalAgent,
    queryOptions: RequestHelper.QueryOptions<UserAgentInteraction> = {},
  ): Promise<UserAgentInteraction[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('agent')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        agentId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
