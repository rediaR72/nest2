import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({
    example: `user@mail.com`,
    description: `Адрес электронной почты`
  })
  readonly email: string
  @ApiProperty({
    example: `qwerty123`,
    description: `пароль`
  })
  readonly password: string
}
