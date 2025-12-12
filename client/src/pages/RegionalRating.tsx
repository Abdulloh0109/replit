import PageLayout from "@/components/layout/PageLayout";
import { useExcelFileStore } from "@/lib/store";
import DynamicBankTable from "@/components/sections/BankTable";

export default function RegionalRating() {
  const { excelFile } = useExcelFileStore();
  return (
    <PageLayout>
      <div className="py-8">
        <DynamicBankTable
          table={excelFile?.[1]?.data}
          title="Viloyat Banklari Reytingi"
          description="O'zbekiston tijorat banklarining viloyat kesimida to'liq reytingi. Moliyaviy barqarorlik va ishonchlilik ko'rsatkichlari."
        />
      </div>
    </PageLayout>
  );
}
