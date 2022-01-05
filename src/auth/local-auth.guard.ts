import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
// Telling Passport that we using 'local' as our strategy
export class LocalAuthGuard extends AuthGuard('local') {}
