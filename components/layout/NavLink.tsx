"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type NavLinkProps = {
  href: string;
  label: string;
  hasMegaMenu?: boolean;
  isMenuOpen?: boolean;
  onFocus?: () => void;
} & React.ComponentPropsWithoutRef<"a">;

export default function NavLink({
  href,
  label,
  hasMegaMenu,
  isMenuOpen,
  onFocus,
  ...rest
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname?.startsWith(href);

  return (
    <Link
      href={href}
      onFocus={onFocus}
      aria-current={isActive ? "page" : undefined}
      aria-haspopup={hasMegaMenu ? "true" : undefined}
      aria-expanded={
        hasMegaMenu
          ? Boolean(isMenuOpen)
          : undefined
      }

      className="group relative flex h-full items-center gap-1 px-4 text-[15px] font-medium text-slate-700 outline-none transition-colors duration-200 hover:text-[#0A2540] focus-visible:text-[#0A2540]"

      {...rest}
    >

      <span
        className={
          isActive
            ? "text-[#0A2540]"
            : ""
        }
      >
        {label}
      </span>


      {hasMegaMenu && (
        <ChevronDown
          className={`h-3.5 w-3.5 text-slate-400 transition-all duration-300 group-hover:text-emerald-600 ${
            isMenuOpen
              ? "rotate-180 text-emerald-600"
              : ""
          }`}
          strokeWidth={2}
        />
      )}


      {/* ACTIVE UNDERLINE */}
      {isActive && (
        <motion.span
          layoutId="active-nav-underline"
          className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-emerald-500"
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 32,
          }}
        />
      )}

    </Link>
  );
}