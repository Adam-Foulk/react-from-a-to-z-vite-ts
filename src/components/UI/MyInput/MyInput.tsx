import styles from './MyInput.module.less'
import {FC, HTMLAttributes} from 'react'
import classNames from 'classnames';

type MyInputProps = HTMLAttributes<HTMLInputElement>

const MyInput: FC<MyInputProps> = 
({
    className,
    ...props
}) => {
    return (
        <input 
            {...props} 
            className={classNames(
                className, 
                styles.myInput
            )}
        />
    );
};

export default MyInput;