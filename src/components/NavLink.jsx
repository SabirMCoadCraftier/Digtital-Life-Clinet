"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, end = false, className }) => {
  const pathname = usePathname();
  const isActive = end ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
  const computedClass =
    typeof className === "function" ? className({ isActive }) : className;

  return (
    <Link href={href} className={computedClass}>
      {children}
    </Link>
  );
};

export default NavLink;
