import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  // 投稿の検索（1件
  async post(postWhereUniqueInput: Prisma.PostWhereUniqueInput) {
    return this.prisma.post.findUnique({
      where: postWhereUniqueInput,
    });
  }

  // 投稿
  async createPost(data: Prisma.PostCreateInput) {
    return this.prisma.post.create({
      data,
    });
  }

  // 投稿の更新
  async updatePost(params: {
    where: Prisma.PostWhereUniqueInput;
    data: Prisma.PostUpdateInput;
  }) {
    const { data, where } = params;
    return this.prisma.post.update({
      data,
      where,
    });
  }

  // 投稿の削除
  async deletePost(where: Prisma.PostWhereUniqueInput) {
    return this.prisma.post.delete({
      where,
    });
  }
}
