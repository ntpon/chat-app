import {
  BelongsTo,
  Column,
  CreatedAt,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript'
import { Chat } from './Chat'
import { HrUser } from './HrUser'
import { JskUser } from './JskUser'
@Table({
  tableName: 'Messages',
  timestamps: true,
})
export class Message extends Model {
  public id!: number

  @Column({
    allowNull: false,
  })
  public chatId!: number

  @Column({
    allowNull: true,
  })
  public content!: string

  @Column({
    allowNull: true,
  })
  public fileUrl!: string

  @Column({
    allowNull: true,
  })
  public imageUrl!: string

  @Column({
    allowNull: false,
  })
  public userType!: string

  @Column({
    allowNull: false,
  })
  public idUser!: number

  @Column({
    allowNull: false,
    defaultValue: false,
  })
  public isRead!: boolean
  @Column({
    allowNull: false,
    defaultValue: false,
  })
  public isDeleted!: boolean

  @BelongsTo(() => Chat, 'chatId')
  public chat!: Chat

  @BelongsTo(() => JskUser, 'idUser')
  public jskUser!: JskUser

  @BelongsTo(() => HrUser, 'idUser')
  public hrUser!: HrUser
}
