import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  // create array of mocking data
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Marius',
      username: 'marius',
      password: '12323',
    },
    {
      id: 2,
      name: 'iBrong',
      username: 'ibrong',
      password: 'asdf',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
