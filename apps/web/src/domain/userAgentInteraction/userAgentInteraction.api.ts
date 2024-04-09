import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { UserAgentInteraction } from './userAgentInteraction.model'

export class UserAgentInteractionApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<UserAgentInteraction>,
  ): Promise<UserAgentInteraction[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/userAgentInteractions${buildOptions}`)
  }

  static findOne(
    userAgentInteractionId: string,
    queryOptions?: ApiHelper.QueryOptions<UserAgentInteraction>,
  ): Promise<UserAgentInteraction> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/userAgentInteractions/${userAgentInteractionId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<UserAgentInteraction>,
  ): Promise<UserAgentInteraction> {
    return HttpService.api.post(`/v1/userAgentInteractions`, values)
  }

  static updateOne(
    userAgentInteractionId: string,
    values: Partial<UserAgentInteraction>,
  ): Promise<UserAgentInteraction> {
    return HttpService.api.patch(
      `/v1/userAgentInteractions/${userAgentInteractionId}`,
      values,
    )
  }

  static deleteOne(userAgentInteractionId: string): Promise<void> {
    return HttpService.api.delete(
      `/v1/userAgentInteractions/${userAgentInteractionId}`,
    )
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<UserAgentInteraction>,
  ): Promise<UserAgentInteraction[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/userAgentInteractions${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<UserAgentInteraction>,
  ): Promise<UserAgentInteraction> {
    return HttpService.api.post(
      `/v1/users/user/${userId}/userAgentInteractions`,
      values,
    )
  }

  static findManyByAgentId(
    agentId: string,
    queryOptions?: ApiHelper.QueryOptions<UserAgentInteraction>,
  ): Promise<UserAgentInteraction[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/conversationalAgents/agent/${agentId}/userAgentInteractions${buildOptions}`,
    )
  }

  static createOneByAgentId(
    agentId: string,
    values: Partial<UserAgentInteraction>,
  ): Promise<UserAgentInteraction> {
    return HttpService.api.post(
      `/v1/conversationalAgents/agent/${agentId}/userAgentInteractions`,
      values,
    )
  }
}
