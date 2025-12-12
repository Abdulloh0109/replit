import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ExcelFileData {
  sheetName: string;
  data: any[];
}

interface ExcelFileStore {
  excelFile: ExcelFileData[] | null;
  setExcelFile: (file: ExcelFileData[] | null) => void;
  clearExcelFile: () => void;
}

export const useExcelFileStore = create<ExcelFileStore>()(
  persist(
    (set) => ({
      excelFile: null,
      setExcelFile: (file) => set({ excelFile: file }),
      clearExcelFile: () => set({ excelFile: null }),
    }),
    {
      name: "excel-file-storage", // localStorage key
      storage: createJSONStorage(() => localStorage),
    }
  )
);

