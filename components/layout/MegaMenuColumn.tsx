"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import type { MegaMenuColumn as MegaMenuColumnType } from "@/lib/navigation-data";
import { getColumnIcon } from "@/lib/mega-menu-icons";

const accentStyles = {
  emerald: {
    icon: "text-emerald-600 bg-emerald-50",
    arrow: "text-emerald-500",
    line: "bg-emerald-500",
  },

  gold: {
    icon: "text-[#B8862B] bg-[#FBF3E3]",
    arrow: "text-[#C9962E]",
    line: "bg-[#C9962E]",
  },
} as const;

export default function MegaMenuColumn({
  column,
  onNavigate,
}: {
  column: MegaMenuColumnType;
  onNavigate?: () => void;
}) {
  const Icon = getColumnIcon(column.title);

  const accent =
    accentStyles[column.accent ?? "emerald"];

  return (
    <motion.div
      className="group min-w-0 w-full"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
    >
      {/* COLUMN HEADER */}
      <motion.div
        className="
          mb-4
          flex
          min-w-0
          items-center
          gap-3
        "
        initial={{
          opacity: 0,
          y: -5,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        {/* ICON */}
        <motion.span
          className={`
            relative
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-xl
            ${accent.icon}
          `}
          whileHover={{
            scale: 1.08,
            rotate: -3,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
          }}
        >
          {/* GLOW */}
          <motion.span
            className={`
              pointer-events-none
              absolute
              inset-0
              rounded-xl
              blur-md
              ${accent.line}
            `}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileHover={{
              opacity: 0.25,
              scale: 1.15,
            }}
            transition={{
              duration: 0.3,
            }}
          />

          {/* ICON */}
          <motion.span
            className="relative z-10"
            whileHover={{
              scale: 1.12,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <Icon
              className="h-4 w-4"
              strokeWidth={2}
            />
          </motion.span>
        </motion.span>

        {/* TITLE */}
        <div className="min-w-0">
          <span
            className="
              block
              text-[13px]
              font-bold
              uppercase
              tracking-[0.07em]
              leading-tight
              text-[#0A2540]
            "
          >
            {column.title}
          </span>

          {/* UNDERLINE */}
          <motion.span
            className={`
              mt-1
              block
              h-[2px]
              rounded-full
              ${accent.line}
            `}
            initial={{
              width: 0,
            }}
            animate={{
              width: 28,
            }}
            transition={{
              duration: 0.4,
              delay: 0.1,
              ease: "easeOut",
            }}
          />
        </div>
      </motion.div>

      {/* COLUMN LINKS */}
      <ul className="m-0 min-w-0 space-y-1 p-0">
        {column.items.map((item, index) => (
          <motion.li
            key={item.href}
            className="min-w-0"
            initial={{
              opacity: 0,
              y: 7,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 0.08 + index * 0.045,
              ease: "easeOut",
            }}
          >
            <Link
              href={item.href}
              onClick={onNavigate}
              className="
                group/link
                relative
                flex
                min-w-0
                w-full
                items-center
                justify-between
                gap-2
                overflow-hidden
                rounded-xl
                px-3
                py-2.5
                text-[14px]
                leading-snug
                text-slate-600

                transition-all
                duration-200

                hover:bg-slate-50
                hover:text-[#0A2540]
                hover:shadow-sm

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#C9962E]/30
              "
            >
              {/* LEFT ACCENT */}
              <span
                className={`
                  pointer-events-none
                  absolute
                  left-0
                  top-1/2
                  h-0
                  w-[2px]
                  -translate-y-1/2
                  rounded-full
                  opacity-0

                  transition-all
                  duration-200

                  group-hover/link:h-5
                  group-hover/link:opacity-100

                  ${accent.line}
                `}
              />

              {/* TEXT */}
              <motion.span
                className="
                  min-w-0
                  break-words
                "
                whileHover={{
                  x: 3,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                {item.label}
              </motion.span>

              {/* ARROW */}
              <span
                className="
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full

                  opacity-0
                  -translate-x-1
                  scale-90

                  transition-all
                  duration-200

                  group-hover/link:translate-x-0
                  group-hover/link:scale-100
                  group-hover/link:opacity-100
                  group-hover/link:bg-white
                  group-hover/link:shadow-sm
                "
              >
                <ArrowRight
                  className={`
                    h-3.5
                    w-3.5
                    transition-transform
                    duration-200
                    group-hover/link:translate-x-0.5
                    ${accent.arrow}
                  `}
                  strokeWidth={2}
                />
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}