import styles from "./UserList.module.less"

import UserListItem from "./UserListItem/UserListItem";

const UserList = ({users, selectedUser, selectUser}) => {

    const selectUserHandler = (user) => () => {
        selectUser(user)
    }

    return (
        <form className={styles.userList}>
            {users.map(user => 
                <UserListItem 
                    selected={selectedUser == user.name} 
                    user={user} 
                    clickHandler={selectUserHandler(user.name)}
                />
            )}
        </form>
    );
};

export default UserList;