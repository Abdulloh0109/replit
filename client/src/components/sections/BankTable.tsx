import { motion } from "framer-motion";
import { banks, Bank } from "@/lib/mockData";
import {
  ArrowUp,
  ArrowDown,
  Minus,
  Building2,
  TrendingUp,
  AlertCircle,
  Shield,
  Award,
  AlertTriangle,
  Download,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as XLSX from "xlsx";

export default function BankTable() {
  // Helper function to get color class based on value
  const getValueColor = (value: number, threshold1: number = 70, threshold2: number = 60) => {
    if (value >= threshold1) return "bg-green-200 text-green-900";
    if (value >= threshold2) return "bg-green-100 text-green-800";
    if (value >= threshold2 - 10) return "bg-orange-100 text-orange-800";
    return "bg-orange-200 text-orange-900";
  };
  
  // Helper function for smaller value ranges (columns 8-9)
  const getSmallValueColor = (value: number, threshold1: number = 15, threshold2: number = 10) => {
    if (value >= threshold1) return "bg-green-200 text-green-900";
    if (value >= threshold2) return "bg-green-100 text-green-800";
    if (value >= threshold2 - 5) return "bg-orange-100 text-orange-800";
    return "bg-orange-200 text-orange-900";
  };

  // Helper function to calculate rank change
  const getRankChange = (bank: Bank) => {
    return bank.august_rank - bank.september_rank;
  };

  // Excel export function
  const exportToExcel = () => {
    // Sort banks by september_score descending
    const sortedBanks = [...banks].sort((a, b) => b.september_score - a.september_score);
    
    // Create workbook and worksheet
    const wb = XLSX.utils.book_new();
    const ws: XLSX.WorkSheet = {};

    // Define header rows (3 rows like in the table)
    // Row 1: Main headers
    const row1: any[] = [
      "№",
      "Tijorat banklari nomi",
      "Reyting ko'rsatkichi",
      "Банк филиали-нинг ўртача кўрсаткичи",
      "Shu jumladan:",
      "",
      "",
      "",
      "Ҳар бир келган мурожаат учун тегишли балл айрилади",
      "",
      "",
    ];

    // Row 2: Sub-headers
    const row2: any[] = [
      "",
      "",
      "",
      "",
      "Kredit tashkilotlarining muammoli aktivlari bilan ishlash va moliyaviy tahlil qilish bo'limi bo'yicha",
      "Tadbirkorlik subyektlarini moliyaviy qo'llab-quvvatlash bo'yicha banklar faoliyatini monitoring qilish bo'limi bo'yicha",
      "Naqd pul muomalasini tashkil etish boshqarmasi bo'yicha",
      "To'lov tizimlari infratuzilmalari va axborot texnologiyalari bo'limi bo'yicha",
      "Банк хизматлари истеъмолчиларининг ҳуқуқларини ҳимоя қилиш, молиявий саводхонлик ва оммабопликни ошириш шўъбаси бўйича",
      "Кредит ташкилотларида молиявий мониторингни мувофиқлаштириш ва валюта назорати бўлими бўйича",
      "Банк филиали устидан тушган фуқаро мурожаатлари бўйича",
    ];

    // Row 3: Me'yor ballari
    const row3: any[] = [
      "№",
      "Me'yor ball",
      "",
      "100",
      "45",
      "25",
      "10",
      "20",
      "-",
      "-",
      "-",
    ];

    // Write header rows
    row1.forEach((val, col) => {
      const cellRef = XLSX.utils.encode_cell({ r: 0, c: col });
      ws[cellRef] = { v: val, t: 's' };
    });

    row2.forEach((val, col) => {
      const cellRef = XLSX.utils.encode_cell({ r: 1, c: col });
      ws[cellRef] = { v: val, t: 's' };
    });

    row3.forEach((val, col) => {
      const cellRef = XLSX.utils.encode_cell({ r: 2, c: col });
      ws[cellRef] = { v: val, t: 's' };
    });

    // Write data rows
    sortedBanks.forEach((bank, index) => {
      const rowIndex = index + 3; // Start from row 4 (0-indexed: 3)
      const rankChange = getRankChange(bank);
      const col1 = bank.august_score || 0;
      const col2 = bank.july_score || 0;
      const col3 = bank.average_score || 0;
      const col4 = bank.col4 || (bank.september_score * 0.8);
      const col5 = bank.col5 || (bank.september_score * 0.1);

      const rowData = [
        index + 1,
        bank.name,
        rankChange > 0 ? rankChange : rankChange < 0 ? rankChange : "",
        bank.september_score,
        col1,
        col2,
        col3,
        col4,
        col5,
        col5 * 0.8,
        col5 * 0.5,
      ];

      rowData.forEach((val, col) => {
        const cellRef = XLSX.utils.encode_cell({ r: rowIndex, c: col });
        ws[cellRef] = { v: val, t: typeof val === 'number' ? 'n' : 's' };
      });
    });

    // Set merged cells for headers
    ws['!merges'] = [
      // Row 1 merges
      { s: { r: 0, c: 0 }, e: { r: 1, c: 0 } }, // №
      { s: { r: 0, c: 1 }, e: { r: 1, c: 1 } }, // Tijorat banklari nomi
      { s: { r: 0, c: 2 }, e: { r: 1, c: 2 } }, // Reyting ko'rsatkichi
      { s: { r: 0, c: 3 }, e: { r: 1, c: 3 } }, // Банк филиали-нинг ўртача кўрсаткичи
      { s: { r: 0, c: 4 }, e: { r: 0, c: 7 } }, // Shu jumladan: (4 columns)
      { s: { r: 0, c: 8 }, e: { r: 0, c: 10 } }, // Ҳар бир келган мурожаат (3 columns)
    ];

    // Set column widths
    ws['!cols'] = [
      { wch: 5 },   // №
      { wch: 35 },  // Tijorat banklari nomi
      { wch: 15 },  // Reyting ko'rsatkichi
      { wch: 25 },  // Банк филиали-нинг ўртача кўрсаткичи
      { wch: 40 },  // Kredit tashkilotlarining muammoli aktivlari
      { wch: 40 },  // Tadbirkorlik subyektlarini moliyaviy qo'llab-quvvatlash
      { wch: 30 },  // Naqd pul muomalasini tashkil etish
      { wch: 35 },  // To'lov tizimlari infratuzilmalari
      { wch: 40 },  // Банк хизматлари истеъмолчиларининг ҳуқуқларини ҳимоя қилиш
      { wch: 40 },  // Кредит ташкилотларида молиявий мониторингни мувофиқлаштириш
      { wch: 35 },  // Банк филиали устидан тушган фуқаро мурожаатлари
    ];

    // Set row heights for headers
    ws['!rows'] = [
      { hpt: 30 }, // Row 1
      { hpt: 40 }, // Row 2
      { hpt: 25 }, // Row 3
    ];

    // Set range
    ws['!ref'] = XLSX.utils.encode_range({ s: { r: 0, c: 0 }, e: { r: sortedBanks.length + 2, c: 10 } });

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, "Banklar Reytingi");

    // Generate filename with current date
    const date = new Date();
    const dateStr = date.toISOString().split('T')[0];
    const filename = `Banklar_Reytingi_${dateStr}.xlsx`;

    // Download file
    XLSX.writeFile(wb, filename);
  };

  const renderTable = (data: Bank[], showRankHighlight = false) => {
    // Sort by september_score descending
    const sortedData = [...data].sort((a, b) => b.september_score - a.september_score);
    
    return (
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            {/* 1-qator */}
            <tr className="bg-slate-50 border-b border-slate-200 text-center">
              <th
                rowSpan={2}
                className="px-4 py-3 text-xs font-bold w-10 border-r"
              >
                №
              </th>
              <th rowSpan={2} className="px-4 py-3 text-xs font-bold border-r">
                Tijorat banklari nomi
              </th>
              <th
                rowSpan={2}
                className="px-4 py-3 text-xs font-bold border-r rotate-[-90deg]"
              >
                Reyting ko'rsatkichi
              </th>
              <th rowSpan={2} className="px-4 py-3 text-xs font-bold border-r">
                Банк филиали-нинг ўртача кўрсаткичи
              </th>
              <th colSpan={4} className="px-4 py-3 text-xs font-bold border-r">
                Shu jumladan:
              </th>
              <th colSpan={3} className="px-4 py-3 text-xs font-bold">
                Ҳар бир келган мурожаат учун тегишли балл айрилади
              </th>
            </tr>

            {/* 2-qator */}
            <tr className="bg-slate-50 border-b border-slate-200 text-center">
              <th className="px-4 py-3 text-xs font-medium border-r w-40">
                Kredit tashkilotlarining muammoli aktivlari bilan ishlash va
                moliyaviy tahlil qilish bo'limi bo'yicha
              </th>

              <th className="px-4 py-3 text-xs font-medium border-r w-40">
                Tadbirkorlik subyektlarini moliyaviy qo'llab-quvvatlash bo'yicha
                banklar faoliyatini monitoring qilish bo'limi bo'yicha
              </th>

              <th className="px-4 py-3 text-xs font-medium border-r w-40">
                Naqd pul muomalasini tashkil etish boshqarmasi bo'yicha
              </th>

              <th className="px-4 py-3 text-xs font-medium border-r w-40">
                To'lov tizimlari infratuzilmalari va axborot texnologiyalari
                bo'limi bo'yicha
              </th>
              <th className="px-4 py-3 text-xs font-medium border-r w-40">
                Банк хизматлари истеъмолчиларининг ҳуқуқларини ҳимоя қилиш,
                молиявий саводхонлик ва оммабопликни ошириш шўъбаси бўйича
              </th>

              <th className="px-4 py-3 text-xs font-medium border-r w-40">
                Кредит ташкилотларида молиявий мониторингни мувофиқлаштириш ва
                валюта назорати бўлими бўйича
              </th>

              <th className="px-4 py-3 text-xs font-medium border-r w-40">
                Банк филиали устидан тушган фуқаро мурожаатлари бўйича
              </th>
            </tr>

            {/* 3-qator — Me'yor ballari */}
            <tr className="bg-blue-50 text-center border-b border-slate-300">
              <th>№</th>
              <th className="px-4 py-2 text-xs font-semibold border-r">
                Me'yor ball
              </th>
              <th></th>
              <th className="px-4 py-2 text-xs font-semibold border-r">100</th>
              <th className="px-4 py-2 text-xs font-semibold border-r">45</th>
              <th className="px-4 py-2 text-xs font-semibold border-r">25</th>
              <th className="px-4 py-2 text-xs font-semibold border-r">10</th>
              <th className="px-4 py-2 text-xs font-semibold">20</th>
              <th className="px-4 py-2 text-xs font-semibold">-</th>
              <th className="px-4 py-2 text-xs font-semibold">-</th>
              <th className="px-4 py-2 text-xs font-semibold">-</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {sortedData.map((bank, index) => {
              const rankChange = getRankChange(bank);
              const col1 = bank.august_score || 0;
              const col2 = bank.july_score || 0;
              const col3 = bank.average_score || 0;
              const col4 = bank.col4 || (bank.september_score * 0.8);
              const col5 = bank.col5 || (bank.september_score * 0.1);
              
              return (
                <tr
                  key={bank.id}
                  className={cn(
                    "hover:bg-slate-50 transition-colors group",
                    showRankHighlight && index < 3 ? "bg-blue-50/30" : ""
                  )}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div
                      className={cn(
                        "w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm transition-transform group-hover:scale-110",
                        showRankHighlight && index === 0
                          ? "bg-yellow-100 text-yellow-700 ring-1 ring-yellow-200"
                          : showRankHighlight && index === 1
                          ? "bg-slate-200 text-slate-700"
                          : showRankHighlight && index === 2
                          ? "bg-orange-100 text-orange-700"
                          : "bg-slate-50 text-slate-500"
                      )}
                    >
                      {index + 1}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-white border border-slate-100 shadow-sm rounded flex items-center justify-center text-primary group-hover:border-primary/30 transition-colors">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                          {bank.name}
                        </div>
                        <div className="text-xs text-slate-500 uppercase">
                          {bank.type} bank
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex items-center justify-center gap-1">
                      {rankChange > 0 ? (
                        <>
                          <ArrowUp className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-semibold text-green-600">
                            {rankChange}
                          </span>
                        </>
                      ) : rankChange < 0 ? (
                        <>
                          <ArrowDown className="w-4 h-4 text-red-600" />
                          <span className="text-sm font-semibold text-red-600">
                            {Math.abs(rankChange)}
                          </span>
                        </>
                      ) : (
                        <span className="text-sm text-slate-400">-</span>
                      )}
                    </div>
                  </td>
                  <td className={cn(
                    "px-6 py-4 whitespace-nowrap text-center text-sm font-semibold",
                    getValueColor(bank.september_score)
                  )}>
                    {bank.september_score.toFixed(1)}
                  </td>
                  <td className={cn(
                    "px-6 py-4 whitespace-nowrap text-center text-sm",
                    getValueColor(col1, 75, 65)
                  )}>
                    {col1.toFixed(1)}
                  </td>
                  <td className={cn(
                    "px-6 py-4 whitespace-nowrap text-center text-sm",
                    getValueColor(col2, 75, 65)
                  )}>
                    {col2.toFixed(1)}
                  </td>
                  <td className={cn(
                    "px-6 py-4 whitespace-nowrap text-center text-sm",
                    getValueColor(col3, 75, 65)
                  )}>
                    {col3.toFixed(1)}
                  </td>
                  <td className={cn(
                    "px-6 py-4 whitespace-nowrap text-center text-sm",
                    getSmallValueColor(col4, 15, 10)
                  )}>
                    {col4.toFixed(1)}
                  </td>
                  <td className={cn(
                    "px-6 py-4 whitespace-nowrap text-center text-sm",
                    getSmallValueColor(col5, 10, 5)
                  )}>
                    {col5.toFixed(1)}
                  </td>
                  <td className={cn(
                    "px-6 py-4 whitespace-nowrap text-center text-sm",
                    getSmallValueColor(col5 * 0.8, 8, 4)
                  )}>
                    {(col5 * 0.8).toFixed(1)}
                  </td>
                  <td className={cn(
                    "px-6 py-4 whitespace-nowrap text-center text-sm",
                    getSmallValueColor(col5 * 0.5, 5, 2)
                  )}>
                    {(col5 * 0.5).toFixed(1)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <section id="rating" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Banklar Reytingi
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Tijorat banklarining moliyaviy barqarorligi va ishonchlilik
              darajasi bo'yicha tasniflangan to'liq ro'yxat.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto pb-4 md:pb-0">
            <TabsList className="bg-white p-1 shadow-sm border border-slate-200 rounded-full">
              <TabsTrigger
                value="general"
                className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Umumiy (TOP-20)
              </TabsTrigger>
              <TabsTrigger
                value="state"
                className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Davlat Banklari
              </TabsTrigger>
              <TabsTrigger
                value="private"
                className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Xususiy Banklar
              </TabsTrigger>
              <TabsTrigger
                value="growth"
                className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                O'sish Yetakchilari
              </TabsTrigger>
              <TabsTrigger
                value="low"
                className="rounded-full px-6 data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                Quyi Reyting (&lt;55)
              </TabsTrigger>
            </TabsList>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <TabsContent value="general" className="mt-0">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
                {renderTable(banks, true)}
              </div>
            </TabsContent>

            <TabsContent value="state" className="mt-0">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
                <div className="p-6 bg-blue-50 border-b border-blue-100 flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold text-primary text-lg">
                      Davlat Banklari
                    </h3>
                    <p className="text-sm text-blue-700">
                      Davlat ulushi mavjud bo'lgan ishonchli banklar ro'yxati
                    </p>
                  </div>
                </div>
                {renderTable(banks.filter((b) => b.type === "state"))}
              </div>
            </TabsContent>

            <TabsContent value="private" className="mt-0">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
                <div className="p-6 bg-purple-50 border-b border-purple-100 flex items-center space-x-3">
                  <Award className="h-6 w-6 text-purple-700" />
                  <div>
                    <h3 className="font-bold text-purple-900 text-lg">
                      Xususiy Banklar
                    </h3>
                    <p className="text-sm text-purple-700">
                      Yuqori raqobatbardoshlikka ega xususiy sektor vakillari
                    </p>
                  </div>
                </div>
                {renderTable(banks.filter((b) => b.type === "private"))}
              </div>
            </TabsContent>

            <TabsContent value="growth" className="mt-0">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
                <div className="p-6 bg-green-50 border-b border-green-100 flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-green-700" />
                  <div>
                    <h3 className="font-bold text-green-900 text-lg">
                      Eng Yuqori O'sish
                    </h3>
                    <p className="text-sm text-green-700">
                      Yillik o'sish sur'ati 10% dan yuqori bo'lgan banklar
                    </p>
                  </div>
                </div>
                {renderTable(
                  banks
                    .filter((b) => {
                      const rankChange = b.august_rank - b.september_rank;
                      return rankChange > 10;
                    })
                    .sort((a, b) => {
                      const aChange = a.august_rank - a.september_rank;
                      const bChange = b.august_rank - b.september_rank;
                      return bChange - aChange;
                    })
                )}
              </div>
            </TabsContent>

            <TabsContent value="low" className="mt-0">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
                <div className="p-6 bg-red-50 border-b border-red-100 flex items-center space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <div>
                    <h3 className="font-bold text-red-900 text-lg">
                      Diqqat Talab Banklar
                    </h3>
                    <p className="text-sm text-red-700">
                      Reyting bali 55 dan past bo'lgan banklar ro'yxati
                    </p>
                  </div>
                </div>
                {renderTable(banks.filter((b) => b.score < 55))}
              </div>
            </TabsContent>
          </motion.div>
        </Tabs>

        <div className="mt-8 text-center">
          <button 
            onClick={exportToExcel}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white border border-slate-300 text-slate-600 rounded-md hover:bg-slate-50 transition-colors text-sm font-medium shadow-sm"
          >
            <Download className="w-4 h-4" />
            Barcha ma'lumotlarni Excel formatida yuklash
          </button>
        </div>
      </div>
    </section>
  );
}
