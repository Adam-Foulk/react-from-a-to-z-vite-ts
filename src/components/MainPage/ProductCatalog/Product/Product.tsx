import styles from "./Product.module.less"
import MyButton from "components/UI/MyButton/MyButton";
import classNames from "classnames";

const Product = ({
    className,
    icon,
    title,
    childs,
    code,
    addProductCode,
    setProductPage,
    onClick,
}) => {
    
    const onClickHandler = () => {
        childs? 
            setProductPage(childs)
        : code?
            addProductCode(code)
        : onClick()
    }

    return (
        <MyButton 
            className={classNames(className, styles.product)}
            title={title}
            onClick={onClickHandler}
        >
            {icon? (<img src={icon}/>): ''}
            <p>{title}</p>
        </MyButton>
    );
};

export default Product;