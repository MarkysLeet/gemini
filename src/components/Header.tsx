"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        Grozan Studio
      </Link>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link href="/projects">Проекты</Link>
          </li>
          <li>
            <Link href="/services">Услуги</Link>
          </li>
          <li>
            <Link href="/contact">Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
