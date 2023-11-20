import MyButton from "components/UI/MyButton/MyButton";
import styles from "./Tab.module.less";
import classNames from "classnames";

import active from "res/tabs-pannel/active.svg";
import background from "res/tabs-pannel/background.svg";
import create from "res/tabs-pannel/add.svg";
import { FC } from "react";

type TabProps = {
  isActive: boolean;
  setActiveOrderNumber: (orderNumber: number) => void;
  dataIndex: number;
  title: number;
  createTab: () => void;
  removeTab: (tabNumber: number) => void;
};

const Tab: FC<TabProps> = ({
  isActive,
  setActiveOrderNumber,
  dataIndex,
  title,
  createTab,
  removeTab,
}) => {
  const onClickHandler = () => {
    if (isActive) {
      removeTab(dataIndex);
    } else {
      setActiveOrderNumber(dataIndex);
    }
  };

  if (createTab) {
    return (
      <MyButton className={styles.tab} onClick={createTab}>
        <img src={create} alt="" />
      </MyButton>
    );
  }

  return (
    <MyButton
      className={classNames(styles.tab, isActive ? styles.active : {})}
      onClick={onClickHandler}
      data-index={dataIndex}
    >
      <img src={isActive ? active : background} alt="" />
      <p>{title}</p>
    </MyButton>
  );
};

export default Tab;
