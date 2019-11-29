import { UserDto } from './user.dto';
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
import { UserService } from './user.service';
import { LoggingInterceptor } from '../shared/logging.interceptor';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}
  @Get('api/users')
  getUsers() {
    // return this.userService.showAllUsers();
  }

  @Post('login')
  login(@Body() data: UserDto) {
    return this.userService.login(data);
  }
  @Post('register')
  @UsePipes()
  register(@Body() data: UserDto) {
    return this.userService.register(data);
  }
}
