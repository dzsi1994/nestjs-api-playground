import { IdeaDTO } from './idea.dto';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { IdeaService } from './idea.service';

@Controller('idea')
export class IdeaController {
  constructor(private ideaService: IdeaService) {}
  @Get()
  showAllIdeas() {
    return this.ideaService.getAllIdeas();
  }
  @Post()
  createIdea(@Body() idea: IdeaDTO) {
    return this.ideaService.createIdea(idea);
  }
  @Get(':id')
  getIdea(@Param('id') id: string) {
    return this.ideaService.getIdea(id);
  }
  @Put(':id')
  updateIdea(@Param('id') id: string, @Body() idea: Partial<IdeaDTO>) {
    return this.ideaService.updateIdea(id, idea);
  }
  @Delete(':id')
  deleteIdea(@Param('id') id: string) {
    return this.ideaService.deleteIdea(id);
  }
}
