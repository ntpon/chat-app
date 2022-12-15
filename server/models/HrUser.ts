import {
  Column,
  CreatedAt,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript'
import { Chat } from './Chat'
import { Message } from './Messages'

@Table({
  tableName: 'HrUsers',
})
export class HrUser extends Model {
  public id!: number

  @Column({
    allowNull: false,
  })
  public firstName!: string

  @Column({
    allowNull: false,
  })
  public lastName!: string

  @Column({
    allowNull: false,
  })
  public avatar!: string

  @Column({
    allowNull: false,
  })
  public idEmp!: number

  @Column({
    allowNull: false,
    defaultValue: false,
  })
  public isOnline!: boolean

  @HasMany(() => Chat, 'idHr')
  public chats!: Chat[]

  @HasMany(() => Message, 'idHr')
  public messages!: Message[]
}
