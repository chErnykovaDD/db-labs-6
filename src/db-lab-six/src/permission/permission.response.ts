import { ApiProperty } from '@nestjs/swagger';

export class PermissionResponse {
  @ApiProperty({
    description: 'The id of the permission',
  })
  id: number;

  @ApiProperty({
    description: 'The name of the permission',
  })
  name: string;
}
