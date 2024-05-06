// src/teams/teams.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TeamsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.team.findMany();
  }

  findOne(id: string) {
    return this.prisma.team.findUnique({
      where: { id },
    });
  }

  create(data: any) {
    return this.prisma.team.create({
      data,
    });
  }

  update(id: string, data: any) {
    return this.prisma.team.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.team.delete({
      where: { id },
    });
  }
}
