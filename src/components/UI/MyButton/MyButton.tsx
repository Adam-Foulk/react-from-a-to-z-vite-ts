import styles from './MyButton.module.less'
import {FC, HTMLAttributes} from 'react'
import classNames from 'classnames';

type MyButtonProps = HTMLAttributes<HTMLButtonElement>

const MyButton: FC<MyButtonProps> = 
    ({
        className,
        ...props
    }) => {

        return (
            <button {...props} className={classNames(className, styles.myBtn)}/>
        );
    };
    
    export default MyButton;    
    

