import PageLayout from "@/components/layout/PageLayout";
import BankList from "@/components/ui/BankList";
import { banks } from "@/lib/mockData";

export default function PrivateBanks() {
  const privateBanks = banks.filter(b => b.type === 'private');

  return (
    <PageLayout>
      <div className="py-8">
        <BankList 
          title="Xususiy Banklar Reytingi" 
          description="Xususiy kapital asosida faoliyat yurituvchi banklar reytingi."
          data={privateBanks}
          showRankHighlight={true}
        />
      </div>
    </PageLayout>
  );
}
