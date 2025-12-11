import PageLayout from "@/components/layout/PageLayout";
import BankList from "@/components/ui/BankList";
import { banks } from "@/lib/mockData";

export default function StateBanks() {
  const stateBanks = banks.filter(b => b.type === 'state');

  return (
    <PageLayout>
      <div className="py-8">
        <BankList 
          title="Davlat Banklari Reytingi" 
          description="Davlat ulushi mavjud bo'lgan banklarning moliyaviy holati."
          data={stateBanks}
          showRankHighlight={true}
        />
      </div>
    </PageLayout>
  );
}
