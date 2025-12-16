import PageLayout from "@/components/layout/PageLayout";
import { useLocation } from "wouter";
import { cyrToLat } from "@/hooks/cyrToLat";
import { ArrowLeft } from "lucide-react";
import { useMemo, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import * as XLSX from "xlsx";
import ratingDataUrl from "@/assets/5_oylik_reting.xlsx";

export default function RatingsPage() {
  const [location, setLocation] = useLocation();
  const [ratingData, setRatingData] = useState<any>(null);

  // URL'dan bank nomini olish va decode qilish
  const encodedBankName = location.split("/ratings/")[1];
  const decodedBankName = encodedBankName
    ? decodeURIComponent(encodedBankName.replace(/-/g, " ")).trim()
    : "";

  // 5_oylik_reting.xlsx faylini o'qish
  const handleRatingFile = async () => {
    if (ratingData) {
      return;
    }

    try {
      const response = await fetch(ratingDataUrl);
      const arrayBuffer = await response.arrayBuffer();

      const workbook = XLSX.read(arrayBuffer, { type: "array" });

      const allSheetsData: any[] = [];

      workbook.SheetNames.forEach((sheetName) => {
        const worksheet = workbook.Sheets[sheetName];
        const rawData = XLSX.utils.sheet_to_json(worksheet) as any[];

        if (!rawData || rawData.length === 0) {
          return;
        }

        // Barcha sheetlardagi datalarni bitta arrayga qo'shish
        allSheetsData.push(...rawData);
      });

      setRatingData(allSheetsData);
    } catch (error) {
      console.error(".xlsx faylni o'qishda xatolik:", error);
      setRatingData(null);
    }
  };

  useEffect(() => {
    handleRatingFile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Excel datalaridan bank nomiga mos datani topish
  const findBankData = () => {
    if (!ratingData || !Array.isArray(ratingData) || !decodedBankName)
      return null;

    // ratingData endi array of objects formatida
    // Har bir object'da "name" field bor
    const bankData = ratingData.find((item: any) => {
      if (!item || typeof item !== "object" || !item.name) return false;

      try {
        const bankName = String(item.name).toLowerCase().trim();
        const searchName = decodedBankName.toLowerCase().trim();

        if (!bankName || !searchName) return false;

        // Latin va Cyrillic nomlarni solishtirish
        const bankNameLatin = cyrToLat(bankName) || bankName;
        const searchNameLatin = cyrToLat(searchName) || searchName;

        return (
          bankNameLatin.includes(searchNameLatin) ||
          bankName.includes(searchName) ||
          searchNameLatin.includes(bankNameLatin)
        );
      } catch (error) {
        console.error("Bank nomini solishtirishda xato:", error);
        return false;
      }
    });

    return bankData || null;
  };

  const bankData = findBankData();

  const isNumeric = (value: any): boolean => {
    if (value === null || value === undefined || value === "") return false;
    const num = Number(value);
    return !isNaN(num) && isFinite(num);
  };

  const chartOptions = useMemo(() => {
    if (!bankData || typeof bankData !== "object") return null;

    const months: string[] = [];
    const values: number[] = [];

    const monthOrder = [
      "Yanvar",
      "Fevral",
      "Mart",
      "Aprel",
      "May",
      "Iyun",
      "Iyul",
      "Avgust",
      "Sentabr",
      "Oktabr",
      "Noyabr",
      "Dekabr",
    ];

    // Barcha object key'larini tekshirish
    Object.keys(bankData).forEach((key) => {
      if (!key || key === "name" || key === "№") return;

      const keyLower = key.toLowerCase().trim();

      // Mapping'dan oy nomini topish
      const mappedMonth = monthOrder.find(
        (month) => month.toLowerCase().trim() === keyLower
      );

      if (mappedMonth && monthOrder.includes(mappedMonth)) {
        const value = bankData[key];
        if (isNumeric(value)) {
          // Agar allaqachon qo'shilmagan bo'lsa
          if (!months.includes(mappedMonth)) {
            months.push(mappedMonth);
            values.push(Number(value));
          }
        }
      }
    });

    // Tartib bo'yicha saralash
    const sortedData = monthOrder
      .map((month) => {
        const index = months.indexOf(month);
        if (index !== -1) {
          return { month, value: values[index] };
        }
        return null;
      })
      .filter(
        (item): item is { month: string; value: number } => item !== null
      );

    if (sortedData.length === 0) return null;

    const sortedMonths = sortedData.map((item) => item.month);
    const sortedValues = sortedData.map((item) => item.value);

    const options: ApexOptions = {
      chart: {
        type: "line",
        height: 350,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      stroke: {
        curve: "smooth",
        width: 3,
        colors: ["#0b4b6f"],
      },
      markers: {
        size: 5,
        colors: ["#0b4b6f"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7,
        },
      },
      xaxis: {
        categories: sortedMonths,
        labels: {
          style: {
            colors: "#64748b",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        min: 0,
        max: 100,
        labels: {
          style: {
            colors: "#64748b",
            fontSize: "12px",
          },
          formatter: (value: number) => value + "%",
        },
        title: {
          text: "Reyting",
          style: {
            color: "#64748b",
            fontSize: "14px",
          },
        },
      },
      grid: {
        borderColor: "#e2e8f0",
        strokeDashArray: 3,
      },
      tooltip: {
        theme: "light",
        y: {
          formatter: (value: number) => value.toFixed(2),
        },
      },
      dataLabels: {
        enabled: true,
        formatter: (value: number) => value.toFixed(2) + "%",
        style: {
          fontSize: "12px",
          fontWeight: 600,
          colors: ["#0b4b6f"],
        },
        offsetY: -10,
      },
      colors: ["#0b4b6f"],
    };

    return {
      series: [
        {
          name: "Reyting",
          data: sortedValues,
        },
      ],
      options,
    };
  }, [bankData]);

  return (
    <PageLayout>
      <div className="py-8">
        {/* Back Button */}
        <button
          onClick={() => setLocation("/")}
          className="flex items-center gap-2 mb-6 text-slate-600 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Ortga qaytish</span>
        </button>

        {bankData ? (
          <div className="space-y-6">
            {/* Bank Name Header */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200 p-6">
              <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">
                {decodedBankName[0].toUpperCase() + decodedBankName.slice(1)}
              </h1>
              <p className="text-slate-600">Reyting ko'rsatkichlari tahlili</p>
            </div>

            {/* Chart */}
            {chartOptions && (
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Oylik Reyting Dinamikasi
                </h2>
                <Chart
                  options={chartOptions.options}
                  series={chartOptions.series}
                  type="line"
                  height={350}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200 p-12 text-center">
            <p className="text-slate-600 text-lg">
              {decodedBankName && decodedBankName.length > 0
                ? `"${
                    decodedBankName[0].toUpperCase() + decodedBankName.slice(1)
                  }" banki uchun ma'lumot topilmadi.`
                : "Bank nomi topilmadi."}
            </p>
            <button
              onClick={() => setLocation("/")}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Bosh sahifaga qaytish
            </button>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
