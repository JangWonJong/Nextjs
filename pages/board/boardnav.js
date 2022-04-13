import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function boardNav(){
  return (
    
      <ul>
        <li className={styles.li}> <Link href='board'>게시글등록</Link> </li>      
        <li className={styles.li}> <Link href='boare-list'>게시글목록</Link> </li>      
    
      </ul>
    
  );
};