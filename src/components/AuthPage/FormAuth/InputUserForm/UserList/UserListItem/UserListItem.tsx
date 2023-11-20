import MyButton from "components/UI/MyButton/MyButton";
import styles from "./UserListItem.module.less";
import classNames from "classnames";
import { FC, MouseEventHandler } from "react";
import { TUser } from "App";

type UserListItemProps = {
  selected: boolean;
  user: TUser;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
};

const UserListItem: FC<UserListItemProps> = ({
  selected,
  user,
  clickHandler,
}) => {
  return (
    <MyButton
      type="button"
      onClick={clickHandler}
      className={classNames(styles.user, selected && styles.selected)}
      key={user.id}
    >
      {user.id < 9 ? 0 : ""}
      {user.id + 1} {user.name}
    </MyButton>
  );
};

export default UserListItem;
