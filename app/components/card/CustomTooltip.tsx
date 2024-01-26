import React from "react";
import styles from "./CustomTooltip.module.scss";

const CustomTooltip: React.FC<any> = ({active, payload, ...props}) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.wrapper}>
        <p className={styles.heading}>{`${payload[0].payload.name}`}</p>
        <p className={styles.label}>{`${payload[0].name}: ${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
