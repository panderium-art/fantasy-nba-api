import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { PrismaService } from 'src/prisma.service';
import { APP_GUARD } from '@nestjs/core';
import { RoleGuard } from 'src/auth/guards/role.guard';

@Module({
  providers: [TeamsService, PrismaService, {
    provide: APP_GUARD,
    useClass: RoleGuard
  }],
  controllers: [TeamsController],
})
export class TeamsModule {}
