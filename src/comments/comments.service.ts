import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentsRepository: Repository<Comment>,
  ) {}

  async findAll() {
    const comments = await this.commentsRepository.find();

    return comments;
  }

  async create(createCommentDto: CreateCommentDto) {
    const newComment = this.commentsRepository.create(createCommentDto);
    await this.commentsRepository.save(newComment);
    return newComment;
  }
}
