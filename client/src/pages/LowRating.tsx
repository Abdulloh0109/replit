import PageLayout from "@/components/layout/PageLayout";
import DynamicBankTable from "@/components/sections/BankTable";
import { useExcelFileStore } from "@/lib/store";

export default function LowRating() {
  const { excelFile } = useExcelFileStore();

  return (
    <PageLayout>
      <div className="py-8">
        <DynamicBankTable
          table={excelFile?.[6]?.data}
          title="55 baldan past"
          description="55 balldan past banklar reytingi."
        />
      </div>
    </PageLayout>
  );
}
