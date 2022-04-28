import { ApiProperty } from '@nestjs/swagger'
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table
} from 'sequelize-typescript'
import { Role } from 'src/roles/roles.model'
import { UserRoles } from 'src/roles/user-role.model'

interface UserCreationAttrs {
  email: string
  password: string
}
@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: `1`, description: `Уникальный идентификатор` })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number
  @ApiProperty({
    example: `user@mail.com`,
    description: `Адрес электронной почты`
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string
  @ApiProperty({ example: `qwerty123`, description: `Пароль` })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string
  @ApiProperty({ example: `true`, description: `Забанен` })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  baned: boolean
  @ApiProperty({
    example: `ты мне не нравишся`,
    description: `Описание причины бана/Можно оставить пустым`
  })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[]
}
