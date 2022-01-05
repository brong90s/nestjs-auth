/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

// By default, strategy is a provider. To make it as provider as need @Injectable() decorator to make it as a provider
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  // If using any strategy other than 'passport-local' the validate argument will be different.
  // If user success login, the 'user' object will be attached to the request and pass download next.
  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    // return below same as -> return done(null, user)
    return user;
  }
}
