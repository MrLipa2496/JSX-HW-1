import { useState } from "react";
import styles from "./Card.module.css";

function Card({ user }) {
  const [followers, setFollowers] = useState(user.followers);
  const [heartColor, setHeartColor] = useState("gray");

  const increaseFollowers = () => {
    setFollowers(followers + 1);
  };

  const toggleHeartColor = () => {
    setHeartColor(heartColor === "gray" ? "yellow" : "gray");
  };

  return (
    <main
      className={styles.cardWrapper}
      style={{
        boxShadow: user.isMale ? "5px 10px 30px blue" : "5px 10px 10px pink",
      }}
    >
      <img className={styles.userImg} src={user.img} alt={`${user.name}`} />
      <div className={styles.imgOverlay}></div>
      <div
        style={{ color: heartColor }}
        onClick={toggleHeartColor}
        className={styles.starBtn}
      >
        <i className="fa-solid fa-star "></i>
      </div>

      <div className={styles.nameWrapper}>
        <p className={styles.userName}>{user.name}</p>
        <p className={styles.userNick}>{user.nick}</p>
      </div>

      <button className={styles.addBtnWrapper} onClick={increaseFollowers}>
        <span className={styles.addBtn}>+</span>
      </button>

      <ul className={styles.userInfo}>
        <li className={styles.info}>
          Tweets <div className={styles.quantityInfo}>{user.tweets}</div>
        </li>
        <li className={styles.info}>
          Following <div className={styles.quantityInfo}>{user.following}</div>
        </li>
        <li className={styles.info}>
          Followers <div className={styles.quantityInfo}>{followers}</div>
        </li>
      </ul>
    </main>
  );
}

export default Card;
