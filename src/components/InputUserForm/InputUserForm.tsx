import styles from "./InputUserForm.module.less"

import UserList from "../UserList/UserList";
import {useState} from 'react'
import {useEffect} from 'react'
import ActionPanel from "../ActionPanel/ActionPanel";
import ListButtons from "../ListButtons/ListButtons";

const InputUserForm = ({setDisplay, setUser}) => {
    
    const users = 
    [
        {id:  0, name: "Crystal D. Moore",    pass: 1111},
        {id:  1, name: "Sherri R. Sears",     pass: 1111},
        {id:  2, name: "Sherri R. Sears",     pass: 1111},
        {id:  3, name: "Carmen C. Blanco",    pass: 1111},
        {id:  4, name: "William C. Townsend", pass: 1111},
        {id:  5, name: "Sylvia K. Morris",    pass: 1111},
        {id:  6, name: "Mary S. Soto",        pass: 1111},
        {id:  7, name: "April J. McIntosh",   pass: 1111},
        {id:  8, name: "Louise C. Lara",      pass: 1111},
        {id:  9, name: "Elizabeth M. Clark",  pass: 1111},
        {id: 10, name: "Elizabeth M. Clark",  pass: 1111},
        {id: 11, name: "Sherri R. Sears",     pass: 1111},
        {id: 12, name: "Carmen C. Blanco",    pass: 1111},
        {id: 13, name: "Carmen C. Blanco",    pass: 1111},
        {id: 14, name: "Sylvia K. Morris",    pass: 1111},
        {id: 15, name: "April J. McIntosh",   pass: 1111},
        {id: 16, name: "William C. Townsend", pass: 1111},
        {id: 17, name: "William C. Townsend", pass: 1111},
        {id: 18, name: "William C. Townsend", pass: 1111},
        {id: 19, name: "Mary S. Soto",        pass: 1111},
        {id: 20, name: "Louise C. Lara",      pass: 1111},
        {id: 21, name: "Crystal D. Moore",    pass: 1111},
        {id: 22, name: "Sherri R. Sears",     pass: 1111},
        {id: 23, name: "Carmen C. Blanco",    pass: 1111},
        {id: 24, name: "William C. Townsend", pass: 1111},
        {id: 25, name: "Sylvia K. Morris",    pass: 1111},
        {id: 26, name: "Crystal D. Moore",    pass: 1111},
        {id: 27, name: "Mary S. Soto",        pass: 1111},
        {id: 28, name: "April J. McIntosh",   pass: 1111},
        {id: 29, name: "Elizabeth M. Clark",  pass: 1111},
        {id: 30, name: "Louise C. Lara",      pass: 1111},
        {id: 31, name: "Louise C. Lara",      pass: 1111},
    ]

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