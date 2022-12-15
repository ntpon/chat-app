import {
  Column,
  CreatedAt,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript'
import { Chat } from './Chat'
@Table({
  tableName: 'Positions',
})
export class Position extends Model {
  public id!: number

  @Column({
    allowNull: false,
  })
  public positionName!: string

  @Column({
    allowNull: false,
  })
  public idEmp!: number

  @HasMany(() => Chat, 'idPosition')
  public chats!: Chat[]
}
