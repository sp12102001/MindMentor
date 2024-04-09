import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class UserAgentInteractionCreateDto {
  @IsString()
  @IsNotEmpty()
  interactionTimestamp: string

  @IsString()
  @IsNotEmpty()
  interactionContent: string

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  agentId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class UserAgentInteractionUpdateDto {
  @IsString()
  @IsOptional()
  interactionTimestamp?: string

  @IsString()
  @IsOptional()
  interactionContent?: string

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  agentId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
