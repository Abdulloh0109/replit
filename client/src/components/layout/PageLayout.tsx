import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import { Building2, Phone, Mail, MapPin } from "lucide-react";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  showHero?: boolean;
  showNavbar?: boolean;
}

const footerSections = [
  { href: "/filial-kesimida", label: "Filial kesimida" },
  { href: "/viloyat-banklari", label: "Viloyat banklari" },
  { href: "/shahar-va-tuman", label: "Shahar va tuman" },
  { href: "/state", label: "Davlat banklari" },
  { href: "/xususiy-banklar", label: "Xususiy banklar" },
  { href: "/top-20", label: "Top-20" },
  { href: "/55-baldan-past", label: "55 baldan past" },
  { href: "/eng-katta-osish", label: "Eng katta oʻsish" },
  { href: "/eng-katta-pasayish", label: "Eng katta pasayish" },
  { href: "/trend", label: "Trend" },
];

const contactInfo = [
  {
    icon: MapPin,
    text: "Toshkent shahar, Аbdulla Qodiriy koʼchasi 1a uy",
  },
  { icon: Phone, text: "+998 71-214-10-82" },
];

export default function PageLayout({
  children,
  showHero = false,
  showNavbar = true,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Hero />
     {showNavbar && <Navbar />}

      <main className="flex-1 bg-slate-50/50">
        <div className="container mx-auto px-4 py-8">{children}</div>
      </main>

      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 py-16 border-t border-slate-700/50 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            {/* About Section */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 text-white mb-5">
                <Building2 className="h-7 w-7 text-blue-400" />
                <span className="font-serif font-bold text-xl">
                  BankRating.uz
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                O'zbekiston bank tizimi faoliyatini yorituvchi mustaqil tahliliy
                portal. Barcha ma'lumotlar rasmiy manbalarga asoslangan.
              </p>
            </div>

            {/* Sections - Split into 2 columns if many items */}
            <div className="md:col-span-2">
              <h4 className="text-white font-bold mb-5 text-lg">Bo'limlar</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {footerSections.map((section, index) => (
                  <a
                    key={index}
                    href={section.href}
                    className="text-sm"
                  >
                  
                    <span>{section.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="md:col-span-1">
              <h4 className="text-white font-bold mb-5 text-lg">Bog'lanish</h4>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <li
                      key={index}
                      className="flex items-start space-x-3 text-sm group"
                    >
                      <Icon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-slate-400 group-hover:text-slate-300 transition-colors">
                        {contact.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700/50 pt-8 text-center">
            <p className="text-xs text-slate-500">
              &copy; 2025 BankRating.uz. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
