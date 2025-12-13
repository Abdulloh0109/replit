import { cn } from "@/lib/utils";

export default function DynamicBankTable({
  table,
  title,
  description,
}: {
  table: any;
  title?: string;
  description?: string;
}) {
  if (!table || table.length === 0) return null;

  const headerRow = table[0]; // 1-qator: nomlar
  const normRow = table[1]; // 2-qator: meʼyor ball
  const bodyRows = table.slice(2); // qolgan satrlar

  // Oylar bilan bog'liq ustunlarni filter qilish
  const isMonthColumn = (headerValue: any): boolean => {
    if (!headerValue) return false;
    const headerStr = String(headerValue).toLowerCase();
    // "2024 йил", "январь", "февраль", "март" va hokazo so'zlarni tekshirish
    const monthKeywords = [
      "йил",
      "январь",
      "февраль",
      "март",
      "апрель",
      "май",
      "июнь",
      "июль",
      "август",
      "сентябр",
      "октябрь",
      "ноябрь",
      "декабрь",
      "ҳолатига",
      "январ",
      "феврал",
      "март",
      "апрел",
      "май",
      "июн",
      "июл",
      "август",
      "сентябр",
      "октябр",
      "ноябр",
      "декабр",
    ];
    return monthKeywords.some((keyword) => headerStr.includes(keyword));
  };

  // Faqat oylar bilan bog'liq bo'lmagan ustunlarni qoldirish
  const allColumns = Object.keys(headerRow);
  const columns = allColumns.filter((col) => !isMonthColumn(headerRow[col]));

  // Raqam yoki ball ekanligini tekshirish
  const isNumeric = (value: any): boolean => {
    if (value === null || value === undefined || value === "") return false;
    const num = Number(value);
    return !isNaN(num) && isFinite(num);
  };

  // Raqamni formatlash - .dan keyin 2 ta raqam qoldirish
  const formatNumber = (value: any): string => {
    if (!isNumeric(value)) return value;
    const num = Number(value);
    return num.toFixed(2);
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
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto ">
        <div className="min-w-full">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 z-10">
              {/* HEADER 1 */}
              <tr className="bg-gradient-to-b from-slate-50 to-slate-100 border-b-2 border-slate-200">
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    className="px-4 py-4 text-xs font-bold text-slate-700 uppercase tracking-wider border-r border-slate-200 last:border-r-0 "
                  >
                    <div className="flex items-center justify-center">
                      {headerRow[col]}
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
                      : isNumeric(normRow[col])
                      ? formatNumber(normRow[col])
                      : normRow[col]}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 bg-white">
              {bodyRows.map((row: any, rowIndex: number) => (
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

                    return (
                      <td
                        key={colIndex}
                        className={cn(
                          "px-4 py-3 text-sm border-r border-slate-100 last:border-r-0",
                          isFirstColumn &&
                            "font-semibold text-slate-500 text-center w-16",
                          isSecondColumn && "font-bold text-slate-800",
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
                              : cellValue}
                          </span>
                        ) : isSecondColumn ? (
                          <span className="text-slate-800">
                            {cellValue === null ||
                            cellValue === undefined ||
                            cellValue === ""
                              ? "-"
                              : isNumeric(cellValue)
                              ? formatNumber(cellValue)
                              : cellValue}
                          </span>
                        ) : (
                          <span>
                            {cellValue === null ||
                            cellValue === undefined ||
                            cellValue === ""
                              ? "-"
                              : isNumeric(cellValue)
                              ? formatNumber(cellValue)
                              : cellValue}
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
          Jami:{" "}
          <span className="font-semibold text-slate-700">
            {bodyRows.length}
          </span>{" "}
          ta bank
        </p>
      </div>
    </div>
  );
}
