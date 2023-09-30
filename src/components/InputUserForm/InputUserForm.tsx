import styles from "./InputUserForm.module.less"

import UserList from "../UserList/UserList";
import {useState} from 'react'
import {useEffect} from 'react'
import ActionPanel from "../ActionPanel/ActionPanel";
import ListButtons from "../ListButtons/ListButtons";

const InputUserForm = ({setDisplay, setUser}) => {
    
    const users = [
        "Crystal D. Moore",
        "Sherri R. Sears",
        "Sherri R. Sears",
        "Carmen C. Blanco",
        "William C. Townsend",
        "Sylvia K. Morris",
        "Mary S. Soto",
        "April J. McIntosh",
        "Louise C. Lara",
        "Elizabeth M. Clark",
        "Elizabeth M. Clark",
        "Sherri R. Sears",
        "Carmen C. Blanco",
        "Carmen C. Blanco",
        "Sylvia K. Morris",
        "April J. McIntosh",
        "William C. Townsend",
        "William C. Townsend",
        "William C. Townsend",
        "Mary S. Soto",
        "Louise C. Lara",
        "Crystal D. Moore",
        "Sherri R. Sears",
        "Carmen C. Blanco",
        "William C. Townsend",
        "Sylvia K. Morris",
        "Crystal D. Moore",
        "Mary S. Soto",
        "April J. McIntosh",
        "Elizabeth M. Clark",
        "Louise C. Lara",
        "Louise C. Lara"
    ]

    const [userId, setUserId] = useState(0)
   
    const getUserPage = () => {
        return users.slice(userId, userId + 10)
    }

    const [userPage, setUserPage] = useState([''])
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
            setUserId(userId - 10)
        }
    }

    const listDownHandler = () => {
        if(userId < (users.length - 10)) {
            setUserId(userId + 10)
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