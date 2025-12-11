import PageLayout from "@/components/layout/PageLayout";
import BankList from "@/components/ui/BankList";
import { banks } from "@/lib/mockData";

export default function GrowthRating() {
  const growthBanks = banks
    .filter(b => b.growth > 0)
    .sort((a, b) => b.growth - a.growth);

  return (
    <PageLayout>
      <div className="py-8">
        <BankList 
          title="Eng Katta O'sish Ko'rsatgan Banklar" 
          description="Yillik o'sish dinamikasi bo'yicha yetakchi banklar ro'yxati."
          data={growthBanks}
          showRankHighlight={true}
        />
      </div>
    </PageLayout>
  );
}
