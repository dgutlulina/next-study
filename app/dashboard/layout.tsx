"use client"; 
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const linkData = [
  {name: "关于", href: "/dashboard/about"},
  {name: "设置", href: "/dashboard/setting"},
];
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  const pathname = usePathname();
  console.log("当前路径:", pathname);
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
      <div className="flex gap-4 font-bold text-lg mb-4 ">
        {linkData.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className={pathname === link.href ? "text-blue-500" : ""}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <h2>Dashboard Layout {count}</h2>
      <button className="bg-black text-white px-4 py-2 rounded-md" onClick={() => setCount(count + 1)}>增加</button>
      {children}
    </div>
  );
}
