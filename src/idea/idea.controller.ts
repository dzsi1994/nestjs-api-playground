import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { IdeaService } from './idea.service';

@Controller('idea')
export class IdeaController {
  constructor(private ideaService: IdeaService) {}
  @Get()
  showAllIdeas() {}
  @Post()
  createIdea() {}
  @Get(':id')
  getIdea() {}
  @Put(':id')
  updateIdea() {}
  @Delete(':id')
  deleteIdea() {}
}
