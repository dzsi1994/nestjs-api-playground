import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { IdeaDTO } from './idea.dto';

@Injectable()
export class IdeaService {
  ideas = [
    { id: '0', idea: 'go to find something' },
    { id: '1', idea: 'go to the shop' },
  ];
  async getAllIdeas() {
    return await this.ideas;
  }
  async createIdea(data: IdeaDTO) {
    data['created'] = Date.now();
    return await data;
  }
  async getIdea(id: string) {
    const idea = await this.ideas.find(item => item.id === id);
    if (!idea) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return idea;
  }
  async updateIdea(id: string, data: Partial<IdeaDTO>) {
    const idea = await this.ideas.find(item => item.id === id);
    if (!idea) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return idea;
  }
  async deleteIdea(id: string) {
    const idea = await this.ideas.find(item => item.id === id);
    if (!idea) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return { deleted: true };
  }
}
