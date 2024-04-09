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

import { UserAgentInteraction } from '../../../modules/userAgentInteraction/domain'

@Entity()
export class ConversationalAgent {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  name: string

  @Column({})
  version: string

  @Column({})
  type: string

  @Column({})
  costModel: string

  @OneToMany(() => UserAgentInteraction, child => child.agent)
  userAgentInteractionsAsAgent?: UserAgentInteraction[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
