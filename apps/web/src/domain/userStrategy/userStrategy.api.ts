import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { UserStrategy } from './userStrategy.model'

export class UserStrategyApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<UserStrategy>,
  ): Promise<UserStrategy[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/userStrategys${buildOptions}`)
  }

  static findOne(
    userStrategyId: string,
    queryOptions?: ApiHelper.QueryOptions<UserStrategy>,
  ): Promise<UserStrategy> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/userStrategys/${userStrategyId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<UserStrategy>): Promise<UserStrategy> {
    return HttpService.api.post(`/v1/userStrategys`, values)
  }

  static updateOne(
    userStrategyId: string,
    values: Partial<UserStrategy>,
  ): Promise<UserStrategy> {
    return HttpService.api.patch(`/v1/userStrategys/${userStrategyId}`, values)
  }

  static deleteOne(userStrategyId: string): Promise<void> {
    return HttpService.api.delete(`/v1/userStrategys/${userStrategyId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<UserStrategy>,
  ): Promise<UserStrategy[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/userStrategys${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<UserStrategy>,
  ): Promise<UserStrategy> {
    return HttpService.api.post(
      `/v1/users/user/${userId}/userStrategys`,
      values,
    )
  }

  static findManyByStrategyId(
    strategyId: string,
    queryOptions?: ApiHelper.QueryOptions<UserStrategy>,
  ): Promise<UserStrategy[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/mentalHealthStrategys/strategy/${strategyId}/userStrategys${buildOptions}`,
    )
  }

  static createOneByStrategyId(
    strategyId: string,
    values: Partial<UserStrategy>,
  ): Promise<UserStrategy> {
    return HttpService.api.post(
      `/v1/mentalHealthStrategys/strategy/${strategyId}/userStrategys`,
      values,
    )
  }
}
