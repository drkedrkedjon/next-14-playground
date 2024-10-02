import Link from "next/link";
import First from "./mdx-files/mdx-1.mdx";
import styles from "./page.module.css";
import Second, { metadata } from "./mdx-files/mdx-2.mdx";

export default function Page() {
  return (
    <div className={styles.page}>
      <h1>MDX Imported</h1>
      <Link href="/">Home Page</Link>
      <First />
      <h2>Titulo: {metadata.title}</h2>
      <p>Description: {metadata.description}</p>
      <Second />
    </div>
  );
}
