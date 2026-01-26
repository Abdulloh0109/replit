import PageLayout from "@/components/layout/PageLayout";
import DynamicBankTable from "@/components/sections/BankTable";
import SliderSection from "@/components/sections/Slider";
import { useExcelFileStore } from "@/lib/store";

export default function GeneralRating() {
  const { excelFile } = useExcelFileStore();
  return (
    <PageLayout showHero={true}>
      <div className="py-8">
        <DynamicBankTable
          table={excelFile?.[0]?.data}
          title="Filial kesimida reyting"
          description="Banklar reyting ko'rsatkichlari jadvali"
        />
      </div>
      {/* <SliderSection /> */}
    </PageLayout>
  );
}
