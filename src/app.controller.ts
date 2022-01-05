import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGurad } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

  // FLOW CODE
  // 1. Go to jwt-auth.guard.ts
  // 2. Go to jwt.strategy.ts
  @UseGuards(JwtAuthGurad)
  @Get('protected')
  getHello(@Request() req): string {
    // TODO: require an Bearer token, validate token
    return req.user;
  }
}
