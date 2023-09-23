import styles from "./UserForm.module.less"

import MyButton from "../UI/MyButton/MyButton";
import arrowUp from "../../res/tabs-pannel/arrow-up.svg"
import arrowDown from "../../res/tabs-pannel/arrow-down.svg"
import UserList from "../UserList/UserList";
import {useState} from 'react'

const UserForm = () => {

    const [users, setUsers] = useState([
        "Sherri R. Sears",
        "Carmen C. Blanco",
        "William C. Townsend",
        "Sylvia K. Morris",
        "Crystal D. Moore",
        "Mary S. Soto",
        "April J. McIntosh",
        "Elizabeth M. Clark",
        "Louise C. Lara",
    ])

    const [selectedUser, selectUser] = useState('')

    return (
        <div className={styles.userForm}>
            <UserList users={users} selectedUser={selectedUser} selectUser={selectUser}/>

            <div className={styles.actionForm}>
                <div className={styles.actionPanel}>
                    <MyButton className="cancel">cancel</MyButton>
                    <MyButton className="enter">enter</MyButton>
                </div>
                <div className={styles.listButtons}>
                    <MyButton className={styles.button}><img src={arrowUp} alt=""/></MyButton>
                    <MyButton className={styles.button}><img src={arrowDown} alt=""/></MyButton>
                </div>  
            </div>
        </div>
    );
};

export default UserForm;