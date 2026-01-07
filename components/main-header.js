import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.jpg";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Image id="logo" src={logo} alt="Logo" width={50} height={50} />
        <Link href="/">Home</Link>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </header>
  );
}
