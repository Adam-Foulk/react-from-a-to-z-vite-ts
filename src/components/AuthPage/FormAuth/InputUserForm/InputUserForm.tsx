import styles from "./InputUserForm.module.less"

import UserList from "./UserList/UserList";
import {useState} from 'react'
import {useEffect} from 'react'
import ActionPanel from "components/UI/ActionPanel/ActionPanel";
import ListButtons from "components/UI/ListButtons/ListButtons";

const InputUserForm = ({setDisplay, users, setUser}) => {

    const [userId, setUserId] = useState(0)
    const pageLength = 10;
    const getUserPage = () => {
        return users.slice(userId, userId + pageLength)
    }

    const [userPage, setUserPage] = useState([{}])
    useEffect(() => {setUserPage(getUserPage())}, [userId])
    
    const [selectedUser, selectUser] = useState('')

    const cancelHandler = () => {
        setDisplay(false)
    }

    const enterHandler = () => {
        setUser(selectedUser)
        setDisplay(false)
    }

    const listUpHandler = () => {
        if(userId > 0) {
            setUserId(userId - pageLength)
        }
    }

    const listDownHandler = () => {
        if(userId < (users.length - pageLength)) {
            setUserId(userId + pageLength)
        }
    }

    return (
        <div className={styles.userForm}>
            <UserList 
                users={userPage} 
                selectedUser={selectedUser} 
                selectUser={selectUser}
            />

            <div className={styles.actionForm}>
                <ActionPanel 
                    direction={'horizontal'} 
                    cancelHandler={cancelHandler} 
                    enterHandler={enterHandler} 
                />
                <ListButtons 
                    listClassName={styles.listButtons} 
                    buttonClassName={styles.button}
                    listUpHandler={listUpHandler}
                    listDownHandler={listDownHandler}
                />
            </div>
        </div>
    );
};

export default InputUserForm;