import Link from "next/link";
import First from "./mdx-files/mdx-1.mdx";
import Second from "./mdx-files/mdx-2.mdx";

export default function Page() {
  return (
    <div className="page">
      <h1>MDX Imported</h1>
      <Link href="/">MDX Direct</Link>
      <hr />
      <First />
      <hr />
      <div style={{ color: "red" }}>
        <Second />
      </div>
    </div>
  );
}
