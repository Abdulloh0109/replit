import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import { Building2, Phone, Mail, MapPin } from "lucide-react";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  showHero?: boolean;
}

export default function PageLayout({
  children,
  showHero = false,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      {<Hero />}
      <Navbar />

      <main className="flex-1 bg-slate-50/50">
        <div className="container mx-auto px-4 py-8">{children}</div>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 text-white mb-4">
                <Building2 className="h-6 w-6" />
                <span className="font-serif font-bold text-lg">
                  BankRating.uz
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                O'zbekiston bank tizimi faoliyatini yorituvchi mustaqil tahliliy
                portal. Barcha ma'lumotlar rasmiy manbalarga asoslangan.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Bo'limlar</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/filial-kesimida"
                    className="hover:text-white transition-colors"
                  >
                    Filial Kesimida
                  </a>
                </li>
                <li>
                  <a
                    href="/viloyat-banklari"
                    className="hover:text-white transition-colors"
                  >
                    Viloyat Banklari
                  </a>
                </li>
                <li>
                  <a
                    href="/shahar-va-tuman"
                    className="hover:text-white transition-colors"
                  >
                    Shahar Va Tuman
                  </a>
                </li>
                <li>
                  <a
                    href="/state"
                    className="hover:text-white transition-colors"
                  >
                    Davlat Banklari
                  </a>
                </li>
                <li>
                  <a
                    href="/xususiy-banklar"
                    className="hover:text-white transition-colors"
                  >
                    Xususiy Banklar
                  </a>
                </li>
                <li>
                  <a
                    href="/top-20"
                    className="hover:text-white transition-colors"
                  >
                    Top-20
                  </a>
                </li>
                <li>
                  <a
                    href="/55-baldan-past"
                    className="hover:text-white transition-colors"
                  >
                    55 Baldan Past
                  </a>
                </li>
                <li>
                  <a
                    href="/eng-katta-osish"
                    className="hover:text-white transition-colors"
                  >
                    Eng Katta Oʻsish
                  </a>
                </li>
                <li>
                  <a
                    href="/eng-katta-pasayish"
                    className="hover:text-white transition-colors"
                  >
                    Eng Katta Pasayish
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Bog'lanish</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Toshkent sh., Islom Karimov ko'chasi, 1</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+998 71 200-00-00</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@bankrating.uz</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-xs">
            &copy; 2025 BankRating.uz. Barcha huquqlar himoyalangan.
          </div>
        </div>
      </footer>
    </div>
  );
}
