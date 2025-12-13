import { create } from "zustand";

interface ExcelFileData {
  sheetName: string;
  data: any[];
}

interface ExcelFileStore {
  excelFile: ExcelFileData[] | null;
  setExcelFile: (file: ExcelFileData[] | null) => void;
  clearExcelFile: () => void;
}

export const useExcelFileStore = create<ExcelFileStore>((set) => ({
  excelFile: null,
  setExcelFile: (file) => set({ excelFile: file }),
  clearExcelFile: () => set({ excelFile: null }),
}));

