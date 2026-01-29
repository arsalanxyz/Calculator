import styles from "./Container.module.css";
function Container({ children }) {
  return <div className={styles.box}>{children}</div>;
}
export default Container;
