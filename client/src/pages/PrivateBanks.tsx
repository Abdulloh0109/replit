import PageLayout from "@/components/layout/PageLayout";
import DynamicBankTable from "@/components/sections/BankTable";
import { useExcelFileStore } from "@/lib/store";

export default function PrivateBanks() {
  const { excelFile } = useExcelFileStore();

  return (
    <PageLayout>
      <div className="py-8">
        <DynamicBankTable
          table={excelFile?.[4]?.data}
          title="Xususiy banklar reytingi"
          description="Xususiy kapital asosida faoliyat yurituvchi banklarning moliyaviy holati."
        />
      </div>
    </PageLayout>
  );
}
