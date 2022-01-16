import { v4 as uuid } from 'uuid';

interface IUserPrivate {
  id?: string;
  name: string;
  login: string;
}
class User {
  id?: string;

  name: string;

  login: string;

  password: string;

  constructor({ name, login, password }: User) {
    this.id = uuid();
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: User): IUserPrivate {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
