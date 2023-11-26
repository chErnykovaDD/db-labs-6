import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePermissionDTO } from './dtos/create-permission.dto';
import { PermissionResponse } from './permission.response';
import { UpdatePermissionDto } from './dtos/update-permission.dto';

@Injectable()
export class PermissionService {
  constructor(private prisma: PrismaService) {}

  async createPermission(data: CreatePermissionDTO): Promise<PermissionResponse> {
    return this.prisma.permission.create({
      data,
    });
  }

  async getPermission(id: number): Promise<PermissionResponse> {
    return this.prisma.permission.findUnique({
      where: {
        id,
      },
    });
  }

  async getPermissions(): Promise<PermissionResponse[]> {
    return this.prisma.permission.findMany();
  }

  async updatePermission(id: number, data: UpdatePermissionDto): Promise<PermissionResponse> {
    return this.prisma.permission.update({
      data,
      where: {
        id,
      },
    });
  }

  async deletePermission(id: number): Promise<PermissionResponse> {
    return this.prisma.permission.delete({
      where: {
        id,
      },
    });
  }
}
