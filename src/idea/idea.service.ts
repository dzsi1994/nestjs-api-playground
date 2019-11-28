import { Injectable } from '@nestjs/common';
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
    return await data;
  }
  async getIdea(id: string) {
    return await this.ideas.find(item => item.id === id);
  }
  async updateIdea(id: string, idea: Partial<IdeaDTO>) {
    // const ideaToUpdate = this.ideas.find(item => item.id === id)
    return await this.ideas[0];
  }
  async deleteIdea(id: string) {
    const ideas = await this.ideas.filter(idea => idea.id !== id);
    return { deleted: true };
  }
}
