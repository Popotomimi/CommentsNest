import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }
}
