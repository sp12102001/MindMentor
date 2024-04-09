import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { ConversationalAgent } from './conversationalAgent.model'

export class ConversationalAgentApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<ConversationalAgent>,
  ): Promise<ConversationalAgent[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/conversationalAgents${buildOptions}`)
  }

  static findOne(
    conversationalAgentId: string,
    queryOptions?: ApiHelper.QueryOptions<ConversationalAgent>,
  ): Promise<ConversationalAgent> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/conversationalAgents/${conversationalAgentId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<ConversationalAgent>,
  ): Promise<ConversationalAgent> {
    return HttpService.api.post(`/v1/conversationalAgents`, values)
  }

  static updateOne(
    conversationalAgentId: string,
    values: Partial<ConversationalAgent>,
  ): Promise<ConversationalAgent> {
    return HttpService.api.patch(
      `/v1/conversationalAgents/${conversationalAgentId}`,
      values,
    )
  }

  static deleteOne(conversationalAgentId: string): Promise<void> {
    return HttpService.api.delete(
      `/v1/conversationalAgents/${conversationalAgentId}`,
    )
  }
}
