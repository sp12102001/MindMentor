import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { ConversationalAgent } from './conversationalAgent.model'

@Injectable()
export class ConversationalAgentDomainFacade {
  constructor(
    @InjectRepository(ConversationalAgent)
    private repository: Repository<ConversationalAgent>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<ConversationalAgent>,
  ): Promise<ConversationalAgent> {
    return this.repository.save(values)
  }

  async update(
    item: ConversationalAgent,
    values: Partial<ConversationalAgent>,
  ): Promise<ConversationalAgent> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: ConversationalAgent): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<ConversationalAgent> = {},
  ): Promise<ConversationalAgent[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<ConversationalAgent> = {},
  ): Promise<ConversationalAgent> {
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
}
