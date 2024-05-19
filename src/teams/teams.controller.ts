// src/teams/teams.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/decorators/role.decorator';

@ApiTags('Teams-related endpoints')
@ApiBearerAuth('JWT-auth')
@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all the teams' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 200, description: 'OK' })
  findAll() {
    return this.teamsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get specific team by id' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 200, description: 'OK', type: 'object' })
  findOne(@Param('id') id: string) {
    return this.teamsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create team' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        team_name: { type: 'string' },
        wins: { type: 'number' },
        losses: { type: 'number' },
        win_loss_ratio: { type: 'number' },
        home_city: { type: 'string' },
        home_arena: { type: 'string' },
        championships_amount: { type: 'number' },
      },
      example: {
        team_name: 'Dallas Mavericks',
        wins: 62,
        losses: 20,
        win_loss_ratio: 3.4,
        home_city: 'Dallas',
        home_arena: 'Dallas Arena',
        championships_amount: 5,
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 200, description: 'OK' })
  @Roles('ADMIN')
  create(@Body() createTeamDto: any) {
    // Define DTO based on your schema
    return this.teamsService.create(createTeamDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update specific team by id' })
  @ApiBody({
    schema: {
      type: 'object',
      example: {
        home_arena: 'Dallas Mavericks Arena',
        championships_amount: 3,
      },
      anyOf: [
        { required: ['team_name'] },
        { required: ['wins'] },
        { required: ['losses'] },
        { required: ['win_loss_ratio'] },
        { required: ['home_city'] },
        { required: ['home_arena'] },
        { required: ['championships_amount'] },
      ],
    },
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 200, description: 'OK'})
  @Roles('ADMIN')
  update(@Param('id') id: string, @Body() updateTeamDto: any) {
    // Define DTO based on your schema
    return this.teamsService.update(id, updateTeamDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete specific team by id' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 200, description: 'OK'})
  @Roles('ADMIN')
  remove(@Param('id') id: string) {
    return this.teamsService.remove(id);
  }
}
