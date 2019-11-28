import { Injectable } from '@nestjs/common';

@Injectable()
export class IdeaService {
  ideas: [
    { id: '0'; idea: 'go to find something' },
    { id: '1'; idea: 'go to the shop' },
  ];
  async getAllIdeas() {
    return await this.ideas;
  }
  async createIdeaa(data) {
    return await data;
  }
  async getIdea(id: string) {
    return await this.ideas[0];
  }
  async updateIdea(id: string) {
    return await this.ideas[0];
  }
  async deleteIdea(id: string) {
    const ideas = await this.ideas.filter(idea => idea.id !== id);
    return { deleted: true };
  }
}
