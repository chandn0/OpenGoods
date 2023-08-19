import React from "react";
import styles from "./PublicGoodsList.module.css";

const Articles = ({ data }) => {
  return (
    <div className={styles.publicgoodslist}>
      <h2>Articels on public Goods</h2>
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

export default Articles;
