import styles from "./wrapper.module.css";

export default function CustomWrapper({ children, customClass }) {
  return <div className={styles[customClass]}>{children}</div>;
}
