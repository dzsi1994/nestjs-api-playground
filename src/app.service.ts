import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getElements(): string[] {
    return ['a', 'b', 'c'];
  }
}
