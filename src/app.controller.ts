import {
  Controller,
  Post,
  UseGuards,
  Request,
  UseFilters,
} from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { HttpExceptionFilter } from './http-exception.filter';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @UseFilters(new HttpExceptionFilter())
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
