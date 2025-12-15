import PageLayout from "@/components/layout/PageLayout";
import DynamicBankTable from "@/components/sections/BankTable";
import { useExcelFileStore } from "@/lib/store";

export default function StateBanks() {
  const { excelFile } = useExcelFileStore();

  return (
    <PageLayout>
      <div className="py-8">
        <DynamicBankTable
          table={excelFile?.[3]?.data}
          title="Davlat banklari reytingi"
          description="Davlat ulushi mavjud bo'lgan banklarning moliyaviy holati."
        />
      </div>
    </PageLayout>
  );
}
