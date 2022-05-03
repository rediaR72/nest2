import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { where } from 'sequelize/types'
import { CreateRoleDto } from 'src/users/dto/create-role.dto'
import { Role } from './roles.model'

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}
  async createRole(dto: CreateRoleDto) {
    const role = await this.roleRepository.create(dto)
    return role
  }
  async getRoleByValue(value: string) {
    const role = await this.roleRepository.findOne({ where: { value } })
    return role
  }
}
