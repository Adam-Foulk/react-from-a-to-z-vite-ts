import { FC } from "react";
import styles from "./UserList.module.less";

import UserListItem from "./UserListItem/UserListItem";
import { TUser } from "App";

type UserListProps = {
  users: TUser[];
  selectedUser: string;
  selectUser: (user: string) => void;
};

const UserList: FC<UserListProps> = ({ users, selectedUser, selectUser }) => {
  const selectUserHandler = (user: string) => () => {
    selectUser(user);
  };

  return (
    <form className={styles.userList}>
      {users.map((user: TUser) => (
        <UserListItem
          key={user.id}
          selected={selectedUser == user.name}
          user={user}
          clickHandler={selectUserHandler(user.name)}
        />
      ))}
    </form>
  );
};

export default UserList;
