import PageLayout from "@/components/layout/PageLayout";
import DynamicBankTable from "@/components/sections/BankTable";
import { useExcelFileStore } from "@/lib/store";

export default function Top20() {
  const { excelFile } = useExcelFileStore();

  return (
    <PageLayout>
      <div className="py-8">
        <DynamicBankTable
          table={excelFile?.[5]?.data}
          title="TOP-20 Banklar"
          description="Eng yuqori ko'rsatkichlarga ega 20 ta yetakchi bank."
        />
      </div>
    </PageLayout>
  );
}
