import PageLayout from "@/components/layout/PageLayout";
import DynamicBankTable from "@/components/sections/BankTable";
import { useExcelFileStore } from "@/lib/store";

export default function BiggestDecline() {
  const { excelFile } = useExcelFileStore();

  return (
    <PageLayout>
      <div className="py-8">
        <DynamicBankTable
          table={excelFile?.[8]?.data}
          title="Eng katta pasayish"
          description="Yillik pasayish dinamikasi bo'yicha banklar ro'yxati."
        />
      </div>
    </PageLayout>
  );
}

