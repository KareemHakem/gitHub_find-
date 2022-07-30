import React from "react";
import UserItem from "../UsersItem";

const Users = ({ users }) => {
  return (
    <div>
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
