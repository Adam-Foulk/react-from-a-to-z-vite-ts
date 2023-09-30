import styles from "./UserList.module.less"

import UserListItem from "../UserListItem/UserListItem";

const UserList = ({users, selectedUser, selectUser}) => {

    const selectUserHandler = (user) => () => {
        selectUser(user)
    }

    return (
        <form className={styles.userList}>
            {users.map(user => 
                <UserListItem 
                    // key={}
                    selected={selectedUser == user} 
                    user={user} 
                    clickHandler={selectUserHandler(user)}
                />
            )}
        </form>
    );
};

export default UserList;