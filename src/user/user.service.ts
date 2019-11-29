import { UserDto } from './user.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  users = [
    {
      id: '0',
      username: 'gnagy1994',
      email: 'gnagy@integramedia.com',
    },
    { id: '1', username: 'gnagy1993', email: 'gnagy@integramedia.com' },
  ];
  async showAll() {
    return await this.users;
  }
  async login(data: UserDto) {
    const { username, password } = data;
    const user = this.users.find(item => item.username === username);
    if (!user) {
      throw new HttpException(
        `Invalid username/password`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const token = await this.token(user);
    return {
      accessToken: token,
    };
  }
  async register(data: UserDto) {
    const { username } = data;
    const user = await !!this.users.find(item => item.username === username);
    if (user) {
      throw new HttpException(`User already exists`, HttpStatus.BAD_REQUEST);
    }
  }
  private token(user) {
    const { id, username, email } = user;
    return jwt.sign({ id, username, email }, 'ddsdas', { expiresIn: '24h' });
  }
}
