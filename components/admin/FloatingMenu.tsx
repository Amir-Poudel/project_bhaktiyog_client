"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, CalendarPlus, ImagePlus, BookOpen } from "lucide-react";

const ITEMS = [
  { label: "Add New Event", href: "/admin/events/new", icon: CalendarPlus },
  { label: "Add New Media", href: "/admin/media/new", icon: ImagePlus },
  { label: "Add New Topic", href: "/admin/topics/new", icon: BookOpen },
];

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="fixed left-4 top-[110px] z-50">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-11 w-11 items-center justify-center rounded-full
                   bg-black/40 text-white backdrop-blur-sm transition
                   hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/70"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Dropdown with vertical sections */}
      <div
        className={`absolute left-0 top-14 w-60 origin-top-left overflow-hidden rounded-xl
                    bg-[#fffdf9] shadow-xl ring-1 ring-orange-100 transition duration-200 ${
                      open
                        ? "scale-100 opacity-100"
                        : "pointer-events-none scale-95 opacity-0"
                    }`}
      >
        <ul className="divide-y divide-orange-100">
          {ITEMS.map(({ label, href, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-[15px] text-[#7a2a0b]
                           transition-colors hover:bg-orange-50"
              >
                <Icon size={20} />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}