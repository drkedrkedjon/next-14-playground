// import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Index Page</h1>
      <Link href="/mdx-direct">MDX Direct</Link>
      <br />
      <Link href="/mdx-imported">MDX Imported next</Link>
    </div>
  );
}