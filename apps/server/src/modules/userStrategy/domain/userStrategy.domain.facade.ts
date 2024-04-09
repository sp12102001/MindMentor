import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { UserStrategy } from './userStrategy.model'

import { User } from '../../user/domain'

import { MentalHealthStrategy } from '../../mentalHealthStrategy/domain'

@Injectable()
export class UserStrategyDomainFacade {
  constructor(
    @InjectRepository(UserStrategy)
    private repository: Repository<UserStrategy>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<UserStrategy>): Promise<UserStrategy> {
    return this.repository.save(values)
  }

  async update(
    item: UserStrategy,
    values: Partial<UserStrategy>,
  ): Promise<UserStrategy> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: UserStrategy): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<UserStrategy> = {},
  ): Promise<UserStrategy[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<UserStrategy> = {},
  ): Promise<UserStrategy> {
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
    queryOptions: RequestHelper.QueryOptions<UserStrategy> = {},
  ): Promise<UserStrategy[]> {
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

  async findManyByStrategy(
    item: MentalHealthStrategy,
    queryOptions: RequestHelper.QueryOptions<UserStrategy> = {},
  ): Promise<UserStrategy[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('strategy')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        strategyId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
