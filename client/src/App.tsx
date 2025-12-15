import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import GeneralRating from "@/pages/GeneralRating";
import Top20 from "@/pages/Top20";
import GrowthRating from "@/pages/GrowthRating";
import StateBanks from "@/pages/StateBanks";
import PrivateBanks from "@/pages/PrivateBanks";
import LowRating from "@/pages/LowRating";
import RegionalRating from "@/pages/RegionalRating";
import CityDistrictRating from "@/pages/CityDistrictRating";
import BiggestDecline from "@/pages/BiggestDecline";
import { useEffect } from "react";
import excelFileUrl from "@/assets/exel.xlsx";
import * as XLSX from "xlsx";
import { useExcelFileStore } from "./lib/store";
import RatingsPage from "./pages/Ratings";
import TrendPage from "./pages/Trand";

function Router() {
  const { excelFile, setExcelFile } = useExcelFileStore();

  function removeEmptyProperties(data: any) {
    return data.map((entry: any) => {
      const cleanedEntry: any = {};
      for (const key in entry) {
        if (entry.hasOwnProperty(key) && entry[key] !== "") {
          cleanedEntry[key.trim()] = entry[key];
        }
      }
      return cleanedEntry;
    });
  }

  const handleAssetFile = async () => {
    // Agar localStorage'da saqlangan fayl bo'lsa, uni ishlatish
    if (excelFile) {
      return;
    }

    try {
      const response = await fetch(excelFileUrl);
      const arrayBuffer = await response.arrayBuffer();

      const workbook = XLSX.read(arrayBuffer, { type: "array" });

      // Barcha sheetlarni o'qish
      const allSheetsData: { sheetName: string; data: any[] }[] = [];

      workbook.SheetNames.forEach((sheetName) => {
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, {
          header: "A", // Array-of-arrays (real structure)
        });

        const cleaned = removeEmptyProperties(data);

        // Sheet nomi bilan birga JSON saqlaymiz
        allSheetsData.push({
          sheetName,
          data: cleaned,
        });
      });

      setExcelFile(allSheetsData);
      // console.log("Assetdan o'qilgan barcha sheets:", allSheetsData);
    } catch (error) {
      console.error("Asset faylni o'qishda xato:", error);
      setExcelFile(null);
    }
  };

  useEffect(() => {
    handleAssetFile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log("excelFile", excelFile);
  return (
    <Switch>
      <Route path="/" component={GeneralRating} />
      <Route path="/trend" component={TrendPage} />
      <Route path="/ratings/:name" component={RatingsPage} />
      <Route path="/filial-kesimida" component={GeneralRating} />
      <Route path="/viloyat-banklari" component={RegionalRating} />
      <Route path="/shahar-va-tuman" component={CityDistrictRating} />
      <Route path="/state" component={StateBanks} />
      <Route path="/xususiy-banklar" component={PrivateBanks} />
      <Route path="/top-20" component={Top20} />
      <Route path="/55-baldan-past" component={LowRating} />
      <Route path="/eng-katta-osish" component={GrowthRating} />
      <Route path="/eng-katta-pasayish" component={BiggestDecline} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
