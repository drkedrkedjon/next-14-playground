import Link from "next/link";
import First from "./mdx-files/mdx-1.mdx";
import Second, { metadata } from "./mdx-files/mdx-2.mdx";

export default function Page() {
  return (
    <div className="page">
      <h1>MDX Imported</h1>
      <Link href="/">Home Page</Link>
      <hr />
      <First />
      <hr />
      <div style={{ color: "tomato" }}>
        <h1>{metadata.title}</h1>
        <p>{metadata.description}</p>
        <Second />
      </div>
    </div>
  );
}
