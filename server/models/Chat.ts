import {
  BelongsTo,
  Column,
  CreatedAt,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript'
import { HrUser } from './HrUser'
import { JskUser } from './JskUser'
import { Message } from './Messages'
import { Position } from './Position'
@Table({
  tableName: 'Chats',
  timestamps: true,
})
export class Chat extends Model {
  public id!: number

  @Column({
    allowNull: false,
  })
  public idJsk!: number

  @Column({
    allowNull: false,
  })
  public idHr!: number

  @Column({
    allowNull: false,
  })
  public idEmp!: number

  @Column({
    allowNull: false,
  })
  public idPosition!: number

  @Column({
    allowNull: false,
    defaultValue: false,
  })
  public isFavorite!: boolean

  @Column({
    allowNull: false,
    defaultValue: false,
  })
  public isDeleted!: boolean

  @Column({
    allowNull: false,
    defaultValue: false,
  })
  public isHidden!: boolean

  @HasMany(() => Message, 'chatId')
  public messages!: Message[]

  @BelongsTo(() => Position, 'idPosition')
  public position!: Position

  @BelongsTo(() => JskUser, 'idJsk')
  public jskUser!: JskUser

  @BelongsTo(() => HrUser, 'idHr')
  public hrUser!: HrUser
}
