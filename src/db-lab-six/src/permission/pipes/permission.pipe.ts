import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { PermissionResponse } from '../permission.response';

@Injectable()
export class PermissionPipe implements PipeTransform {
  constructor(private prisma: PrismaService) {}

  async transform(id: number) {
    const permission = await this.prisma.permission.findUnique({
      where: {
        id,
      },
    });

    if (!permission) {
      throw new BadRequestException('Permission with such id was not found');
    }

    return id;
  }
}
