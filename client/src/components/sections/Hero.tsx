import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/professional_government_bank_building_with_blue_sky.png";

export default function Hero() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
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
            <span className="text-white/90 text-sm font-medium tracking-wider uppercase">Rasmiy Statistika Portali</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg leading-tight">
            O'zbekiston Banklarining <br/>
            <span className="text-yellow-400">Milliy Reytingi</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Bank tizimining barqarorligi, o'sish dinamikasi va xizmatlar sifati bo'yicha mustaqil tahliliy ma'lumotlar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button 
              onClick={() => document.getElementById('rating')?.scrollIntoView({behavior: 'smooth'})}
              className="px-8 py-3 bg-primary text-white font-medium rounded hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Reytingni Ko'rish
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded hover:bg-white/20 transition-colors">
              Tahliliy Hisobotlar
            </button> */}
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400" />
    </div>
  );
}
