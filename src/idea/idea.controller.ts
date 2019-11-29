import { IdeaDTO } from './idea.dto';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UsePipes,
  Logger,
} from '@nestjs/common';
import { IdeaService } from './idea.service';
import { ValdiationPipe } from 'src/shared/validation.pipe';

@Controller('api/idea')
export class IdeaController {
  private logger = new Logger('IdeaController');
  constructor(private ideaService: IdeaService) {}
  @Get()
  showAllIdeas() {
    return this.ideaService.getAllIdeas();
  }
  @Post()
  @UsePipes(new ValdiationPipe())
  createIdea(@Body() idea: IdeaDTO) {
    this.logger.log(JSON.stringify(idea));
    return this.ideaService.createIdea(idea);
  }
  @Get(':id')
  getIdea(@Param('id') id: string) {
    return this.ideaService.getIdea(id);
  }
  @Put(':id')
  @UsePipes(new ValdiationPipe())
  updateIdea(@Param('id') id: string, @Body() idea: Partial<IdeaDTO>) {
    return this.ideaService.updateIdea(id, idea);
  }
  @Delete(':id')
  deleteIdea(@Param('id') id: string) {
    return this.ideaService.deleteIdea(id);
  }
}
