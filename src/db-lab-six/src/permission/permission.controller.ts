import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { CreatePermissionDTO } from './dtos/create-permission.dto';
import { PermissionResponse } from './permission.response';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { PermissionPipe } from './pipes/permission.pipe';
import { UpdatePermissionDto } from './dtos/update-permission.dto';

@ApiTags('permissions')
@Controller('permissions')
export class PermissionController {
  constructor(private permissionService: PermissionService) {}

  @ApiOkResponse({
    type: PermissionResponse,
  })
  @ApiBadRequestResponse({
    description: `
        Name cannot be empty
        Name must be a string`,
  })
  @ApiOperation({
    summary: 'The endpoint to create a permission',
  })
  @Post()
  async createPermission(@Body() body: CreatePermissionDTO): Promise<PermissionResponse> {
    return await this.permissionService.createPermission(body);
  }

  @ApiOkResponse({
    type: PermissionResponse,
  })
  @ApiBadRequestResponse({
    description: `
      Permission with such id was not found`,
  })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'The id of existing permission',
  })
  @ApiOperation({
    summary: 'The endpoint to retrieve a permission by id',
  })
  @Get(':id')
  async getPermission(
    @Param('id', ParseIntPipe, PermissionPipe) id: number,
  ): Promise<PermissionResponse> {
    return await this.permissionService.getPermission(id);
  }

  @ApiOkResponse({
    type: [PermissionResponse],
  })
  @ApiOperation({
    summary: 'The endpoint to retrieve all existing permissions',
  })
  @Get()
  async getPermissions(): Promise<PermissionResponse[]> {
    return await this.permissionService.getPermissions();
  }

  @ApiOkResponse({
    type: PermissionResponse,
  })
  @ApiBadRequestResponse({
    description: `
      Permission with such id was not found
      Name must be a string`,
  })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'The id of existing permission',
  })
  @ApiOperation({
    summary: 'The endpoint to update existing permission by id',
  })
  @Patch(':id')
  async updatePermission(
    @Param('id', ParseIntPipe, PermissionPipe) id: number,
    @Body() body: UpdatePermissionDto,
  ): Promise<PermissionResponse> {
    return await this.permissionService.updatePermission(id, body);
  }

  @ApiOkResponse({
    type: PermissionResponse,
  })
  @ApiBadRequestResponse({
    description: `
      Permission with such id was not found`,
  })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'The id of existing permission',
  })
  @ApiOperation({
    summary: 'The endpoint to delete a permission by id',
  })
  @Delete(':id')
  async deletePermission(
    @Param('id', ParseIntPipe, PermissionPipe) id: number,
  ): Promise<PermissionResponse> {
    return await this.permissionService.deletePermission(id);
  }
}
