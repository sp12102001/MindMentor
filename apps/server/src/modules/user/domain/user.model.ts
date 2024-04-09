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

import { Notification } from '../../../modules/notification/domain'

import { UserAgentInteraction } from '../../../modules/userAgentInteraction/domain'

import { Goal } from '../../../modules/goal/domain'

import { Feedback } from '../../../modules/feedback/domain'

import { UserStrategy } from '../../../modules/userStrategy/domain'

export enum UserStatus {
  VERIFIED = 'VERIFIED',
  CREATED = 'CREATED',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  email: string

  @Column()
  name: string

  @Column({ nullable: true })
  pictureUrl?: string

  @Column({ select: false, nullable: true })
  password: string

  @Column({ enum: UserStatus, default: UserStatus.VERIFIED })
  status: UserStatus

  @OneToMany(() => UserAgentInteraction, child => child.user)
  userAgentInteractions?: UserAgentInteraction[]

  @OneToMany(() => Goal, child => child.user)
  goals?: Goal[]

  @OneToMany(() => Feedback, child => child.user)
  feedbacks?: Feedback[]

  @OneToMany(() => UserStrategy, child => child.user)
  userStrategys?: UserStrategy[]

  @OneToMany(() => Notification, notification => notification.user)
  notifications?: Notification[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
