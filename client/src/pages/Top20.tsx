import PageLayout from "@/components/layout/PageLayout";
import BankList from "@/components/ui/BankList";
import { banks } from "@/lib/mockData";

export default function Top20() {
  const top20Banks = banks.slice(0, 20);
  
  return (
    <PageLayout>
      <div className="py-8">
        <BankList 
          title="TOP-20 Banklar" 
          description="Eng yuqori ko'rsatkichlarga ega 20 ta yetakchi bank."
          data={top20Banks}
          showRankHighlight={true}
        />
      </div>
    </PageLayout>
  );
}
