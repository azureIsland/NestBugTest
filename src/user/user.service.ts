import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PostService } from 'src/post/post.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private readonly postService: PostService,
  ) {}

  // ユニークユーザーの検索
  async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  // ユーザーの作成
  async createUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data,
    });
  }

  // ユーザーの更新
  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  // ユーザーの削除
  async deleteUser(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({
      where,
    });
  }
}
