import { Body, Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  async signUpUser(@Body() userData: { name?: string; email: string }) {
    return this.userService.createUser(userData);
  }
}
