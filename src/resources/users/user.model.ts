const { v4: uuidv4 } = require('uuid');

interface IUser {
  name: string;
  login: string;
}

export interface IUserWithId extends IUser {
  id: string;
}

export interface IUserWithPass extends IUser {
  password: string;
}

class User {
  id: string;
  name: string;
  login: string;
  password: string;

  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: IUserWithId) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
