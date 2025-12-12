import PageLayout from "@/components/layout/PageLayout";
import DynamicBankTable from "@/components/sections/BankTable";
import { useExcelFileStore } from "@/lib/store";

export default function CityDistrictRating() {
  const { excelFile } = useExcelFileStore();

  return (
    <PageLayout>
      <div className="py-8">
        <DynamicBankTable
          table={excelFile?.[2]?.data}
          title="Shahar va Tuman Kesimida Reyting"
          description="Shahar va tuman kesimida banklar reytingi"
        />
      </div>
    </PageLayout>
  );
}
