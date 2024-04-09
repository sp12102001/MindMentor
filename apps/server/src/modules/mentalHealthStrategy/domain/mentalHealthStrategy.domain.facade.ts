import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { MentalHealthStrategy } from './mentalHealthStrategy.model'

@Injectable()
export class MentalHealthStrategyDomainFacade {
  constructor(
    @InjectRepository(MentalHealthStrategy)
    private repository: Repository<MentalHealthStrategy>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<MentalHealthStrategy>,
  ): Promise<MentalHealthStrategy> {
    return this.repository.save(values)
  }

  async update(
    item: MentalHealthStrategy,
    values: Partial<MentalHealthStrategy>,
  ): Promise<MentalHealthStrategy> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: MentalHealthStrategy): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<MentalHealthStrategy> = {},
  ): Promise<MentalHealthStrategy[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<MentalHealthStrategy> = {},
  ): Promise<MentalHealthStrategy> {
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
