import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get(':id')
  async getPostById(@Param('id') id: string) {
    return this.postService.post({ id: +id });
  }

  @Post('')
  async createDraft(
    @Body() postData: { title: string; content?: string; authorEmail: string },
  ) {
    const { title, content, authorEmail } = postData;
    return this.postService.createPost({
      title,
      content,
      author: {
        connect: {
          email: authorEmail,
        },
      },
    });
  }
}
