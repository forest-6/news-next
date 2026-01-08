import Link from "next/link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">Next News</Link>
      </div>
      <ul>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </header>
  );
}
