import React from "react";
import styles from "./Card.module.css";

const Card = ({ cardData, key }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={cardData.imageUrl}
          alt={cardData.title}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{cardData.title}</h2>
        <p className={styles.description}>{cardData.description}</p>
        <div className={styles.links}>
          <a
            href={cardData.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={cardData.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
