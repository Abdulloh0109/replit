import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { name: "Asosiy Sahifa", href: "/" },
    { name: "Filial Kesimida", href: "/filial-kesimida" },
    { name: "Viloyat Banklari", href: "/viloyat-banklari" },
    { name: "Shahar Va Tuman", href: "/shahar-va-tuman" },
    { name: "Davlat Banklari", href: "/state" },
    { name: "Xususiy Banklar", href: "/xususiy-banklar" },
    { name: "Top-20", href: "/top-20" },
    { name: "55 Baldan Past", href: "/55-baldan-past" },
    { name: "Eng Katta Oʻsish", href: "/eng-katta-osish" },
    { name: "Eng Katta Pasayish", href: "/eng-katta-pasayish" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary text-primary-foreground shadow-lg border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="hidden xl:flex items-center space-x-1 w-full justify-center">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={cn(
                    "px-3 py-2 text-xs font-medium transition-all duration-200 rounded-md uppercase tracking-wide opacity-90 hover:opacity-100 hover:bg-white/10 text-center whitespace-nowrap",
                    location === link.href
                      ? "bg-white/20 text-white font-bold shadow-sm"
                      : ""
                  )}
                >
                  {link.name}
                </div>
              </Link>
            ))}
          </div>

          <div className="xl:hidden flex w-full justify-between items-center">
            <span className="font-serif font-bold text-lg">MENU</span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-white/10"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="xl:hidden bg-primary border-t border-white/10 overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block w-full text-left px-3 py-2 text-base font-medium hover:bg-white/10 rounded-md transition-colors",
                    location === link.href
                      ? "bg-white/20 text-white"
                      : "text-blue-100"
                  )}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
