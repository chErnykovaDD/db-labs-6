import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePermissionDto {
  @ApiProperty({
    description: 'The name of the permission',
  })
  @IsString({ message: 'Name must be a string' })
  @IsOptional()
  name?: string;
}
