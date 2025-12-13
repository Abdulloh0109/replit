import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/professional_government_bank_building_with_blue_sky.png";
import logo from "@/assets/CBU_Logo.svg.png";
import pdfFile from "@/assets/10dan boshlangan.pdf";
import { FileText } from "lucide-react";

export default function Hero() {
  const handleOpenPdf = () => {
    window.open(pdfFile, "_blank");
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        {/* Logo and PDF Button Header */}
        <div className="absolute top-0 left-0 z-20 flex w-full h-16 md:h-20 px-4 md:px-6 items-center justify-between">
          <img
            src={logo}
            alt="CBU Logo"
            className="h-14 mt-2 w-auto md:h-16 lg:h-16 object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center justify-center px-4 py-1 mb-6 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm">
            <span className="text-white/90 text-sm font-medium tracking-wider uppercase">
              Rasmiy Statistika Portali
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Tijorat banklarning reyting koʻrsatkichlari. <br />
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleOpenPdf}
              className="flex items-center cursor-pointer px-4 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-md md:rounded-lg transition-all duration-200 text-white text-xs md:text-sm font-medium shadow-lg hover:shadow-xl"
            >
              <FileText className="h-4 w-4 md:h-5 md:w-5" />
              <span className="ml-1">Renking</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400" />
    </div>
  );
}
