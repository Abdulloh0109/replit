import { create } from "zustand";

interface ExcelFileData {
  sheetName: string;
  data: any[];
}

interface ExcelFileStore {
  excelFile: ExcelFileData[] | null;
  ratingData: any[] | null;
  setRatingData: (data: ExcelFileData[] | null) => void;
  setExcelFile: (file: ExcelFileData[] | null) => void;
  clearExcelFile: () => void;
}

export const useExcelFileStore = create<ExcelFileStore>((set) => ({
  excelFile: null,
  ratingData: null,
  setRatingData: (data) => set({ ratingData: data }),
  setExcelFile: (file) => set({ excelFile: file }),
  clearExcelFile: () => set({ excelFile: null }),
}));

