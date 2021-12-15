import { getAllUsers, createUser, readUser, updateUser, deleteUser } from './user.memory.repository';
import { IUserWithPass } from './user.model';

const getAll = () => getAllUsers();
const create = (user: IUserWithPass) => createUser(user);
const read = (id: string) => readUser(id);
const update = (id: string, user: IUserWithPass) => updateUser(id, user);
const remove = (id: string) => deleteUser(id);

export { getAll, create, read, update, remove };
