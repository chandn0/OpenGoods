import React from "react";
import styles from "./PublicGoodsList.module.css";

const PublicGoodsList = ({ data }) => {
  return (
    <div className={styles.publicgoodslist}>
      <h2>Public Goods Grants</h2>
      {data.map((item, index) => (
        <div className={styles.publicgoodsitem} key={index}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default PublicGoodsList;
