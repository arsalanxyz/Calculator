import styles from "./Display.module.css";
function Display({ displayVal }) {
  return (
    <>
      <div className={styles.display}>
        <input type="text" value={displayVal} readOnly></input>
      </div>
    </>
  );
}
export default Display;
