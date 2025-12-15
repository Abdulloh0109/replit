import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [location] = useLocation();

  const links = [
    { name: "Filial Kesimida", href: "/filial-kesimida" },
    { name: "Viloyat Banklari", href: "/viloyat-banklari" },
    { name: "Shahar Va Tuman", href: "/shahar-va-tuman" },
    { name: "Davlat Banklari", href: "/state" },
    { name: "Xususiy Banklar", href: "/xususiy-banklar" },
    { name: "Top-20", href: "/top-20" },
    { name: "55 Baldan Past", href: "/55-baldan-past" },
    { name: "Eng Katta Oʻsish", href: "/eng-katta-osish" },
    { name: "Eng Katta Pasayish", href: "/eng-katta-pasayish" },
    { name: "Trend", href: "/trend" },
  ];

  return (
    <nav
      className=" sticky top-0 z-50
    bg-white shadow-sm
     rounded-[12px]
    mx-4 mt-6 flex justify-center items-center"
    >
      <div className="overflow-x-auto w-full">
        <div
          className="
        flex items-center gap-1 p-2 whitespace-nowrap
        justify-start
        md:justify-center
      "
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={cn(
                  "px-3 py-2 text-xs text-black font-medium rounded-md uppercase tracking-wide transition-all duration-200 opacity-90 hover:opacity-100",
                  location === link.href
                    ? "bg-primary text-white font-bold shadow-sm rounded-[12px]"
                    : "hover:bg-gray-100"
                )}
              >
                {link.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
