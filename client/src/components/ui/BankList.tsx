import { motion } from "framer-motion";
import { Bank } from "@/lib/mockData";
import { ArrowUp, ArrowDown, Minus, Building2, TrendingUp, AlertCircle, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface BankListProps {
  title: string;
  description?: string;
  data: Bank[];
  showRankHighlight?: boolean;
}

export default function BankList({ title, description, data, showRankHighlight = false }: BankListProps) {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200 mb-8">
      <div className="p-6 border-b border-slate-100 bg-slate-50">
        <h2 className="text-2xl font-serif font-bold text-slate-900">{title}</h2>
        {description && <p className="text-slate-600 mt-2">{description}</p>}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-white border-b border-slate-200">
              <th rowSpan={2} className="px-4 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider border-r border-slate-100 w-16">№</th>
              <th rowSpan={2} className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider border-r border-slate-100 min-w-[250px]">Тижорат банклари номи</th>
              <th rowSpan={2} className="px-4 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider border-r border-slate-100 w-24 bg-blue-50/50">Банк филиалининг ўртача кўрсаткичи</th>
              
              <th colSpan={2} className="px-4 py-2 text-center text-xs font-bold text-slate-700 uppercase border-b border-r border-slate-100 bg-slate-50">Сентябрь ойи</th>
              <th colSpan={2} className="px-4 py-2 text-center text-xs font-bold text-slate-700 uppercase border-b border-r border-slate-100 bg-slate-50">Август ойи</th>
              <th colSpan={2} className="px-4 py-2 text-center text-xs font-bold text-slate-700 uppercase border-b border-slate-100 bg-slate-50">Июль ойи</th>
            </tr>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-2 py-2 text-center text-[10px] font-medium text-slate-500 uppercase border-r border-slate-100 w-20">эгаллаган ўрни</th>
              <th className="px-2 py-2 text-center text-[10px] font-medium text-slate-500 uppercase border-r border-slate-100 w-20">рейтинг кўрсаткичи</th>
              <th className="px-2 py-2 text-center text-[10px] font-medium text-slate-500 uppercase border-r border-slate-100 w-20">эгаллаган ўрни</th>
              <th className="px-2 py-2 text-center text-[10px] font-medium text-slate-500 uppercase border-r border-slate-100 w-20">рейтинг кўрсаткичи</th>
              <th className="px-2 py-2 text-center text-[10px] font-medium text-slate-500 uppercase border-r border-slate-100 w-20">эгаллаган ўрни</th>
              <th className="px-2 py-2 text-center text-[10px] font-medium text-slate-500 uppercase w-20">рейтинг кўрсаткичи</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.length > 0 ? (
              data.map((bank, index) => (
                <tr 
                  key={bank.id} 
                  className={cn(
                    "hover:bg-slate-50 transition-colors group text-sm",
                    showRankHighlight && index < 3 ? "bg-green-50/30" : ""
                  )}
                >
                  <td className="px-4 py-3 text-center font-medium text-slate-500 border-r border-slate-100">
                    {bank.rank}
                  </td>
                  <td className="px-6 py-3 border-r border-slate-100">
                    <div className="font-bold text-slate-800">{bank.name}</div>
                  </td>
                  
                  {/* Average Score (Main Rating) */}
                  <td className={cn(
                    "px-4 py-3 text-center font-bold border-r border-slate-100",
                    bank.score >= 80 ? "bg-green-100 text-green-800" :
                    bank.score >= 70 ? "bg-yellow-100 text-yellow-800" :
                    "bg-orange-100 text-orange-800"
                  )}>
                    {bank.score.toFixed(1)}
                  </td>

                  {/* September */}
                  <td className="px-4 py-3 text-center border-r border-slate-100 bg-red-50/30 font-medium text-slate-700">
                    {bank.september_rank}
                  </td>
                  <td className={cn(
                    "px-4 py-3 text-center border-r border-slate-100 font-medium",
                    bank.september_score >= 80 ? "bg-green-50 text-green-700" :
                    bank.september_score >= 70 ? "bg-yellow-50 text-yellow-700" :
                    "bg-orange-50 text-orange-700"
                  )}>
                    {bank.september_score.toFixed(1)}
                  </td>

                  {/* August */}
                  <td className="px-4 py-3 text-center border-r border-slate-100 bg-red-50/30 font-medium text-slate-700">
                    {bank.august_rank}
                  </td>
                  <td className={cn(
                    "px-4 py-3 text-center border-r border-slate-100 font-medium",
                    bank.august_score >= 80 ? "bg-green-50 text-green-700" :
                    bank.august_score >= 70 ? "bg-yellow-50 text-yellow-700" :
                    "bg-orange-50 text-orange-700"
                  )}>
                    {bank.august_score.toFixed(1)}
                  </td>

                  {/* July */}
                  <td className="px-4 py-3 text-center border-r border-slate-100 bg-red-50/30 font-medium text-slate-700">
                    {bank.july_rank}
                  </td>
                  <td className={cn(
                    "px-4 py-3 text-center font-medium",
                    bank.july_score >= 80 ? "bg-green-50 text-green-700" :
                    bank.july_score >= 70 ? "bg-yellow-50 text-yellow-700" :
                    "bg-orange-50 text-orange-700"
                  )}>
                    {bank.july_score.toFixed(1)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={9} className="px-6 py-12 text-center text-slate-500">
                  Ma'lumot topilmadi
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
