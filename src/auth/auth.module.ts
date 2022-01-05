import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  // import 'PassportModule', since we it need for inject to 'local.strategy.ts'
  imports: [UsersModule, PassportModule.register({ session: true })],
  // When we use 'LocalStrategy' or any as a provider module it kind of automatically reigster as an existing strategy from passport
  providers: [AuthService, LocalStrategy, SessionSerializer],
})
export class AuthModule {}
