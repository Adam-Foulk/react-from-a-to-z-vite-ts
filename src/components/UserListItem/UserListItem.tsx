import MyButton from '../UI/MyButton/MyButton';
import styles from './UserListItem.module.less';
import classNames from 'classnames';

const UserListItem = ({selected, user, clickHandler}) => {
    return (
        <MyButton 
            onClick={clickHandler}
            className={classNames(styles.user, (selected && styles.selected))}
            type="button"
            key={user.id}
        >
            {(user.id < 9)? 0 : ''}{user.id+1} {user.name}
        </MyButton>
    );
};

export default UserListItem;