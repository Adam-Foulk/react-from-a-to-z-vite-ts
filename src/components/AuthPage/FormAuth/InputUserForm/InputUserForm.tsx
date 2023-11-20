import styles from "./InputUserForm.module.less";

import UserList from "./UserList/UserList";
import { FC, useState } from "react";
import { useEffect } from "react";
import ActionPanel, {
  EActionPanelDirection,
} from "components/UI/ActionPanel/ActionPanel";
import ListButtons from "components/UI/ListButtons/ListButtons";
import { TUser } from "App";

type InputUserFormProps = {
  setDisplay: (value: boolean) => void;
  users: TUser[];
  setUserName: (user: string) => void;
};

const InputUserForm: FC<InputUserFormProps> = ({
  setDisplay,
  users,
  setUserName,
}) => {
  const [userId, setUserId] = useState<number>(0);
  const pageLength: number = 10;
  const getUserPage = () => {
    return users.slice(userId, userId + pageLength);
  };

  const [userPage, setUserPage] = useState<TUser[]>([]);
  useEffect(() => {
    setUserPage(getUserPage());
  }, [userId]);

  const [selectedUser, selectUser] = useState("");

  const cancelHandler = () => {
    setDisplay(false);
  };

  const enterHandler = () => {
    setUserName(selectedUser);
    setDisplay(false);
  };

  const listUpHandler = () => {
    if (userId > 0) {
      setUserId(userId - pageLength);
    }
  };

  const listDownHandler = () => {
    if (userId < users.length - pageLength) {
      setUserId(userId + pageLength);
    }
  };

  return (
    <div className={styles.userForm}>
      <UserList
        users={userPage}
        selectedUser={selectedUser}
        selectUser={selectUser}
      />

      <div className={styles.actionForm}>
        <ActionPanel
          direction={EActionPanelDirection.horizontal}
          cancelHandler={cancelHandler}
          enterHandler={enterHandler}
        />
        <ListButtons
          listClassName={styles.listButtons}
          buttonClassName={styles.button}
          onListUp={listUpHandler}
          onListDown={listDownHandler}
        />
      </div>
    </div>
  );
};

export default InputUserForm;
