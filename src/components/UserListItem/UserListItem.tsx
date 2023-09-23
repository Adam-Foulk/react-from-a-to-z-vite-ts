import MyButton from '../UI/MyButton/MyButton';
import styles from './UserListItem.module.less';
import classNames from 'classnames';

const UserListItem = ({selected, user, clickHandler}) => {
    return (
        <MyButton 
            onClick={clickHandler}
            className={classNames(styles.user, (selected && styles.selected))}
            type="button"
        >{user}</MyButton>
    );
};

export default UserListItem;