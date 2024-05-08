const users = [];

addUsers = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const userExists = users.find(
    (user) => user.room === room && user.name === name
  );

  if (!name || !room) return { error: "Name and room are required" };
  if (userExists) return { error: "Name is taken" };

  let user = { id, name, room };

  users.push(user);
};

remUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
};

findUser = (id) => {
  return users.find((user) => user.id === id);
};

getUsersInRoom = (room) => {
  return users.filter((user) => users.room === room);
};

module.exports = { addUsers, remUser, findUser, getUsersInRoom };
