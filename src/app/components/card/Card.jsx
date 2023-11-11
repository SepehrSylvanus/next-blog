import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href={"/"}>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, vero.
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
          adipisci ducimus quia mollitia debitis architecto inventore
          consequuntur assumenda iusto placeat nihil earum id natus sequi
          dignissimos magnam corporis, vitae obcaecati!
        </p>
        <Link href={"/"} className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
