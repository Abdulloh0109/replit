import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import BankTable from "@/components/sections/BankTable";
import { Building2, Phone, Mail, MapPin } from "lucide-react";
import SliderSection from "@/components/sections/Slider";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">


      <main className="flex-1">
        <SliderSection />

        {/* Additional Info / CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Bank Xizmatlari Sifatini Baholang
            </h2>
            <p className="max-w-2xl mx-auto text-blue-100 mb-8 text-lg">
              Sizning fikringiz bank tizimini rivojlantirishda muhim ahamiyatga
              ega. So'rovnomada qatnashing va yutuqli o'yin ishtirokchisiga
              aylaning.
            </p>
            <a
              href="https://t.me/cbutoshvil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-yellow-400 text-slate-900 font-bold px-8 py-3 rounded hover:bg-yellow-300 transition-colors shadow-lg">
                Taklif va mulohazalar uchun bizga murojaat qiling.
              </button>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
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
                  <a href="#" className="hover:text-white transition-colors">
                    Reytinglar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tahlillar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Yangiliklar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Markaziy Bank
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
