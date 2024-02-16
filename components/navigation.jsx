"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "📌" : ""}
        </li>
        <li>
          <Link href="/about-us">Abous Us</Link>{" "}
          {path === "/about-us" ? "📌" : ""}
        </li>
      </ul>
    </header>
  );
}
