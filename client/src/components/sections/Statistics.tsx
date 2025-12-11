import { motion } from "framer-motion";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, Legend, BarChart, Bar } from "recharts";
import { growthData, transferData, regionalData } from "@/lib/mockData";
import { TrendingUp, Globe, Map, Building } from "lucide-react";

export default function StatisticsSection() {
  return (
    <div className="bg-white">
      {/* Growth Charts */}
      <section id="growth" className="py-20 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 text-primary font-bold mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <span className="uppercase tracking-wide text-sm font-bold">Dinamika va Tahlil</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Bank Tizimining <br/><span className="text-primary">Barqaror O'sish Sur'atlari</span>
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                2024-2025 yillarda O'zbekiston bank tizimi aktivlari va kapitalining sezilarli o'sishi kuzatildi. Xususiylashtirish jarayonlari va raqamli transformatsiya bozor dinamikasiga ijobiy ta'sir ko'rsatmoqda.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-primary mb-2">+24%</div>
                  <div className="text-sm font-medium text-slate-600">Kredit portfeli o'sishi</div>
                  <div className="text-xs text-slate-400 mt-2">O'tgan yilga nisbatan</div>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-yellow-500 mb-2">+18%</div>
                  <div className="text-sm font-medium text-slate-600">Omonatlar hajmi</div>
                  <div className="text-xs text-slate-400 mt-2">Aholi ishonchi ortishi</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100">Kreditlar</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-100">Depozitlar</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium border border-purple-100">Raqamli Banklar</span>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="h-[400px] bg-white rounded-2xl p-6 shadow-xl border border-slate-100"
            >
              <h4 className="font-bold text-slate-800 mb-6">Aktivlar O'sish Dinamikasi (mlrd so'm)</h4>
              <ResponsiveContainer width="100%" height="85%">
                <AreaChart data={growthData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPrivate" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#eab308" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#eab308" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: 'none', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                    itemStyle={{ fontSize: '13px', fontWeight: 500 }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                  <Area 
                    name="Jami Aktivlar"
                    type="monotone" 
                    dataKey="value" 
                    stroke="var(--color-primary)" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                  <Area 
                    name="Xususiy Sektor"
                    type="monotone" 
                    dataKey="private" 
                    stroke="#eab308" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorPrivate)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transfers and Regions */}
      <section id="regional" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Hududiy Tahlil va Statistika</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Viloyatlar kesimida bank xizmatlari qamrovi va xalqaro pul o'tkazmalari geografiyasi.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Pie Chart Section */}
            <motion.div 
               id="transfers"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
            >
              <div className="flex items-center space-x-3 mb-8 border-b border-slate-100 pb-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Xalqaro Pul O'tkazmalari</h3>
                  <p className="text-sm text-slate-500">Davlatlar kesimida (2024)</p>
                </div>
              </div>
              
              <div className="h-[350px] relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={transferData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={120}
                      paddingAngle={4}
                      dataKey="value"
                      stroke="none"
                    >
                      {transferData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(255,255,255,0.95)', border: 'none', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                    />
                    <Legend layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ fontSize: '14px', fontWeight: 500 }} />
                  </PieChart>
                </ResponsiveContainer>
                
                {/* Center text for Donut */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                  <div className="text-3xl font-bold text-slate-900">$12.5</div>
                  <div className="text-xs text-slate-500 uppercase font-medium">Milliard</div>
                </div>
              </div>
            </motion.div>

            {/* Regional Bar Chart & Table */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
            >
              <div className="flex items-center space-x-3 mb-8 border-b border-slate-100 pb-4">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Map className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Hududiy Faollik Reytingi</h3>
                  <p className="text-sm text-slate-500">Viloyatlar bo'yicha bank xizmatlari hajmi</p>
                </div>
              </div>

              {/* Bar Chart for top regions */}
              <div className="h-[200px] mb-6">
                <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={regionalData.slice(0, 6)}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="region" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} interval={0} />
                      <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }} />
                      <Bar dataKey="banks" fill="var(--color-primary)" radius={[4, 4, 0, 0]} barSize={30} />
                   </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-3 overflow-y-auto max-h-[200px] pr-2 custom-scrollbar">
                {regionalData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200 group">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded bg-white text-slate-500 flex items-center justify-center text-xs font-bold border border-slate-200">
                        {i + 1}
                      </div>
                      <span className="font-medium text-slate-700 group-hover:text-primary transition-colors">{item.region}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-xs text-slate-400">Filiallar</div>
                        <div className="font-bold text-slate-700">{item.banks} ta</div>
                      </div>
                      <span className="text-green-600 font-bold text-xs bg-green-50 px-2 py-1 rounded border border-green-100">{item.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
