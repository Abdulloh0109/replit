import PageLayout from "@/components/layout/PageLayout";
import DynamicBankTable from "@/components/sections/BankTable";
import { useExcelFileStore } from "@/lib/store";

export default function GrowthRating() {
  const { excelFile } = useExcelFileStore();

  return (
    <PageLayout>
      <div className="py-8">
        <DynamicBankTable
          table={excelFile?.[7]?.data}
          title="Eng katta oʻsish"
          description="Yillik o'sish dinamikasi bo'yicha yetakchi banklar ro'yxati."
        />
      </div>
    </PageLayout>
  );
}
