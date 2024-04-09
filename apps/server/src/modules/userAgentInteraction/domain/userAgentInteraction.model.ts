import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { User } from '../../../modules/user/domain'

import { ConversationalAgent } from '../../../modules/conversationalAgent/domain'

@Entity()
export class UserAgentInteraction {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  interactionTimestamp: string

  @Column({})
  interactionContent: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.userAgentInteractions)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({})
  agentId: string

  @ManyToOne(
    () => ConversationalAgent,
    parent => parent.userAgentInteractionsAsAgent,
  )
  @JoinColumn({ name: 'agentId' })
  agent?: ConversationalAgent

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
