import { getAllUsers, createUser, readUser, updateUser, deleteUser } from './user.memory.repository';

const getAll = () => getAllUsers();
const create = (user) => createUser(user);
const read = (id) => readUser(id);
const update = (id, user) => updateUser(id, user);
const remove = (id) => deleteUser(id);

export { getAll, create, read, update, remove };
