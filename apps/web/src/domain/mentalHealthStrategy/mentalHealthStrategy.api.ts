import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { MentalHealthStrategy } from './mentalHealthStrategy.model'

export class MentalHealthStrategyApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<MentalHealthStrategy>,
  ): Promise<MentalHealthStrategy[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/mentalHealthStrategys${buildOptions}`)
  }

  static findOne(
    mentalHealthStrategyId: string,
    queryOptions?: ApiHelper.QueryOptions<MentalHealthStrategy>,
  ): Promise<MentalHealthStrategy> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/mentalHealthStrategys/${mentalHealthStrategyId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<MentalHealthStrategy>,
  ): Promise<MentalHealthStrategy> {
    return HttpService.api.post(`/v1/mentalHealthStrategys`, values)
  }

  static updateOne(
    mentalHealthStrategyId: string,
    values: Partial<MentalHealthStrategy>,
  ): Promise<MentalHealthStrategy> {
    return HttpService.api.patch(
      `/v1/mentalHealthStrategys/${mentalHealthStrategyId}`,
      values,
    )
  }

  static deleteOne(mentalHealthStrategyId: string): Promise<void> {
    return HttpService.api.delete(
      `/v1/mentalHealthStrategys/${mentalHealthStrategyId}`,
    )
  }
}
