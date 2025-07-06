'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link href="/dashboard/about" className={pathname === "/dashboard/about" ? "text-blue-500" : ""}>
            关于
          </Link>
        </li>
        <li>
          <Link href="/dashboard/setting" className={pathname === "/dashboard/setting" ? "text-blue-500" : ""}>
            设置
          </Link>
        </li>
      </ul>
    </nav>
  );
}
