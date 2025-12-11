import PageLayout from "@/components/layout/PageLayout";
import StatisticsSection from "@/components/sections/Statistics";
import { regionalData } from "@/lib/mockData";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, Tooltip, Bar, PieChart, Pie, Cell, Legend } from "recharts";
import { Map, Building } from "lucide-react";

export default function RegionalRating() {
  return (
    <PageLayout>
      <div className="py-8">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Hududiy Reyting va Tahlil</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Map className="text-primary" /> Hududlar kesimida faollik
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionalData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" hide />
                  <YAxis dataKey="region" type="category" width={100} tick={{fontSize: 12}} />
                  <Tooltip />
                  <Bar dataKey="banks" fill="var(--color-primary)" name="Filiallar soni" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
             <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Building className="text-green-600" /> Hududiy bozor ulushi
            </h3>
             <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={regionalData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="banks"
                    >
                      {regionalData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`hsl(215, ${100 - (index * 10)}%, 35%)`} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend layout="vertical" align="right" verticalAlign="middle" />
                  </PieChart>
                </ResponsiveContainer>
             </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
           <div className="p-6 bg-slate-50 border-b border-slate-200">
             <h3 className="text-xl font-bold">Batafsil Hududiy Statistika</h3>
           </div>
           <div className="overflow-x-auto">
             <table className="w-full">
               <thead>
                 <tr className="bg-white text-left">
                   <th className="px-6 py-4 font-semibold text-slate-500">Hudud</th>
                   <th className="px-6 py-4 font-semibold text-slate-500">Bozor hajmi</th>
                   <th className="px-6 py-4 font-semibold text-slate-500">O'sish (Trend)</th>
                   <th className="px-6 py-4 font-semibold text-slate-500">Filiallar soni</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                 {regionalData.map((item, i) => (
                   <tr key={i} className="hover:bg-slate-50">
                     <td className="px-6 py-4 font-medium text-slate-900">{item.region}</td>
                     <td className="px-6 py-4 text-slate-600">{item.volume}</td>
                     <td className="px-6 py-4 text-green-600 font-bold">{item.trend}</td>
                     <td className="px-6 py-4 text-slate-600">{item.banks} ta</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>
      </div>
    </PageLayout>
  );
}

// Add missing import for YAxis
import { YAxis } from "recharts";
