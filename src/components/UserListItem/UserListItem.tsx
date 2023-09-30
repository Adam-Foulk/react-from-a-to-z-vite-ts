import MyButton from '../UI/MyButton/MyButton';
import styles from './UserListItem.module.less';
import classnames from 'classnames';

const UserListItem = ({selected, user, clickHandler}) => {
    return (
        <MyButton 
            onClick={clickHandler}
            className={classnames(styles.user, (selected && styles.selected))}
            type="button"
        >{user}</MyButton>
    );
};

export default UserListItem;