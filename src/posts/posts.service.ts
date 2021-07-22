import { Injectable } from '@nestjs/common';
import { Prisma, Post as PostModel } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<PostModel[]> {
    return this.prisma.post.findMany();
  }

  async create(data: Prisma.PostCreateInput): Promise<PostModel> {
    return this.prisma.post.create({ data });
  }
}
