import React from "react";

const Users = () => {
  const users = [
    { id: 1, name: "Anna" },
    { id: 2, name: "Jake" },
    { id: 3, name: "jokee" },
  ];
  return (
    <div>
      <ul>
        <h1>List of new users</h1>
        {users.map((user, index) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Users;
