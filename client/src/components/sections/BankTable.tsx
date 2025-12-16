import { cn } from "@/lib/utils";
import { cyrToLat } from "@/hooks/cyrToLat";
import { TrendingUp, TrendingDown, Search } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function DynamicBankTable({
  table,
  title,
  description,
  toHref,
  name = "bank",
}: {
  table: any;
  title?: string;
  description?: string;
  toHref?: string;
  name?: string;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [, setLocation] = useLocation();

  if (!table || table.length === 0) return null;

  const headerRow = table[0]; // 1-qator: nomlar
  const normRow = table[1]; // 2-qator: meʼyor ball
  const bodyRows = table.slice(2); // qolgan satrlar


  const allColumns = Object.keys(headerRow);
  const columns = allColumns;

  // "Тижорат банклари номи" ustunini topish
  const bankNameColumn = columns.find(
    (col) => 
      String(headerRow[col]).toLowerCase().includes('тижорат') ||
      String(headerRow[col]).toLowerCase().includes('банк') ||
      String(headerRow[col]).toLowerCase().includes('номи')
  );

  // Bank nomini URL-safe qilish
  const getBankUrl = (bankName: any): string => {
    if (!bankName) return "";
    const name = cyrToLat(String(bankName));
    // URL-safe qilish: bo'shliqlarni tire bilan almashtirish va maxsus belgilarni olib tashlash
    const urlSafe = encodeURIComponent(name.trim().replace(/\s+/g, '-').toLowerCase());
    return `/ratings/${urlSafe}`;
  };

  // Bank nomiga bosilganda navigation
  const handleBankNameClick = (bankName: any) => {
    if (!bankName) return;
    const url = getBankUrl(bankName);
    setLocation(url);
  };

  // Search filter qilish
  const filteredRows = searchQuery
    ? bodyRows.filter((row: any) => {
        if (!bankNameColumn) return true;
        const bankName = String(cyrToLat(row[bankNameColumn]) || "").toLowerCase();
        const query = cyrToLat(searchQuery).toLowerCase();
        return cyrToLat(bankName).includes(query);
      })
    : bodyRows;

  // Raqam yoki ball ekanligini tekshirish
  const isNumeric = (value: any): boolean => {
    if (value === null || value === undefined || value === "") return false;
    const num = Number(value);
    return !isNaN(num) && isFinite(num);
  };

  // Raqamni formatlash - faqat .dan keyin 2 ta yoki undan ko'p raqam bo'lsa formatNumber qilish (yaxlitlash qilmasdan)
  const formatNumber = (value: any): string => {
    if (!isNumeric(value)) return value;
    const num = Number(value);
    // Agar butun raqam bo'lsa (nuqta yo'q), formatNumber qilmaslik
    if (Number.isInteger(num)) {
      return String(num);
    }
    // Asl qiymatni string sifatida tekshirish
    const valueStr = String(value);
    // Agar nuqta bo'lsa, .dan keyin nechta raqam borligini tekshirish
    if (valueStr.includes('.')) {
      const decimalPart = valueStr.split('.')[1];
      // Agar .dan keyin 2 ta yoki undan ko'p raqam bo'lsa, faqat 2 ta raqam qoldirish (yaxlitlash qilmasdan)
      if (decimalPart && decimalPart.length > 2) {
        // Yaxlitlash qilmasdan, faqat kesib tashlash
        const integerPart = valueStr.split('.')[0];
        const truncatedDecimal = decimalPart.substring(0, 2);
        return `${integerPart}.${truncatedDecimal}`;
      }
      // Agar .dan keyin 1-2 ta raqam bo'lsa, o'zgartirmaslik
      return valueStr;
    }
    return String(num);
  };

  // Ball qiymatiga qarab rang berish
  const getScoreColor = (value: any): string => {
    if (!isNumeric(value)) return "";
    const num = Number(value);
    if (num >= 80) return "bg-green-50 text-green-800 font-semibold";
    if (num >= 70) return "bg-yellow-50 text-yellow-800 font-semibold";
    if (num >= 60) return "bg-orange-50 text-orange-800 font-semibold";
    return "bg-red-50 text-red-800 font-semibold";
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary via-primary/95 to-primary/90 p-6 border-b border-primary/20">
        <h2 className="text-2xl font-serif font-bold text-white">{title}</h2>
        <p className="text-blue-100 mt-2 text-sm">{description}</p>
        
        {/* Search Input */}
        <div className="mt-4 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
            <input
              type="text"
              placeholder="Bank nomi bo'yicha qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50"
            />
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto ">
        <div className="min-w-full">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 z-10">
              {/* HEADER 1 */}
              <tr className="bg-gradient-to-b from-slate-50 to-slate-100 border-b-2 border-slate-200">
                {columns.map((col: any, idx: number) => (
                  <th
                    key={idx}
                    className="px-4 py-4 text-xs font-bold text-slate-700 uppercase tracking-wider border-r border-slate-200 last:border-r-0 "
                  >
                    <div className="flex items-center justify-center">
                      {cyrToLat(headerRow[col])}
                    </div>
                  </th>
                ))}
              </tr>

              {/* HEADER 2 (MEʼYOR BALL) */}
              <tr className="bg-gradient-to-b from-blue-50 to-blue-100/80 border-b-2 border-blue-200">
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    className={cn(
                      "px-4 py-3 text-xs font-bold text-slate-700 border-r border-blue-200 last:border-r-0",
                      isNumeric(normRow[col]) && "text-blue-800"
                    )}
                  >
                    {normRow[col] === null ||
                    normRow[col] === undefined ||
                    normRow[col] === ""
                      ? "-"
                      : cyrToLat(String(normRow[col]))}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 bg-white">
              {filteredRows.map((row: any, rowIndex: number) => (
                <tr
                  key={rowIndex}
                  className={cn(
                    "transition-all duration-150 hover:bg-slate-50 hover:shadow-sm",
                    rowIndex % 2 === 0 ? "bg-white" : "bg-slate-50/30"
                  )}
                >
                  {columns.map((col, colIndex) => {
                    const cellValue = row[col];
                    const isFirstColumn = colIndex === 0;
                    const isSecondColumn = colIndex === 1;
                    const isRatingChangeColumn = headerRow[col] === 'рейтинг ўзгариши';
                    
                    // Reyting o'zgarishi uchun icon aniqlash
                    const getRatingIcon = () => {
                      if (!isRatingChangeColumn || !isNumeric(cellValue)) return null;
                      const num = Number(cellValue);
                      if (num > 0) {
                        return <TrendingUp className="h-4 w-4 text-green-600 inline-block ml-1" />;
                      } else if (num < 0) {
                        return <TrendingDown className="h-4 w-4 text-red-600 inline-block ml-1" />;
                      }
                      return null;
                    };
                    
                    return (
                      <td
                        key={colIndex}
                        className={cn(
                          "px-4 py-3 text-sm border-r border-slate-100 last:border-r-0",
                          isFirstColumn &&
                            "font-semibold text-slate-500 text-center w-16",
                          isSecondColumn && "font-bold text-slate-800 min-w-[200px]",
                          !isFirstColumn &&
                            !isSecondColumn &&
                            isNumeric(cellValue) &&
                            getScoreColor(cellValue),
                          !isFirstColumn &&
                            !isSecondColumn &&
                            !isNumeric(cellValue) &&
                            "text-slate-700 text-center"
                        )}
                      >
                        {isFirstColumn ? (
                          <span className="text-primary font-bold">
                            {cellValue === null ||
                            cellValue === undefined ||
                            cellValue === ""
                              ? "-"
                              : cyrToLat(String(cellValue))}
                          </span>
                        ) : isSecondColumn ? (
                          <span 
                            className={cn(
                              "text-slate-800 min-w-[200px]",
                              bankNameColumn === col && toHref ? "cursor-pointer hover:text-primary hover:underline transition-colors" : ""
                            )}
                            onClick={() => toHref ? bankNameColumn === col && handleBankNameClick(cellValue) : {}}
                          >
                            {cellValue === null ||
                            cellValue === undefined ||
                            cellValue === ""
                              ? "-"
                              : isNumeric(cellValue)
                              ? formatNumber(cellValue)
                              : cyrToLat(String(cellValue))}
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-1">
                            {cellValue === null ||
                            cellValue === undefined ||
                            cellValue === ""
                              ? "-"
                              : isNumeric(cellValue)
                              ? formatNumber(cellValue)
                              : cyrToLat(String(cellValue))}
                            {getRatingIcon()}
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-slate-50 px-6 py-4 border-t border-slate-200">
        <p className="text-xs text-slate-500 text-center">
          {searchQuery ? (
            <>
              Topildi:{" "}
              <span className="font-semibold text-slate-700">
                {filteredRows.length}
              </span>{" "}
              ta bank (Jami: {bodyRows.length})
            </>
          ) : (
            <>
              Jami:{" "}
              <span className="font-semibold text-slate-700">
                {bodyRows.length}
              </span>{" "}
              ta {name}
            </>
          )}
        </p>
      </div>
    </div>
  );
}
