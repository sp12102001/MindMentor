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

import { MentalHealthStrategy } from '../../../modules/mentalHealthStrategy/domain'

@Entity()
export class UserStrategy {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  startDate: string

  @Column({ nullable: true })
  endDate?: string

  @Column({})
  status: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.userStrategys)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({})
  strategyId: string

  @ManyToOne(
    () => MentalHealthStrategy,
    parent => parent.userStrategysAsStrategy,
  )
  @JoinColumn({ name: 'strategyId' })
  strategy?: MentalHealthStrategy

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
