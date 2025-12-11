import PageLayout from "@/components/layout/PageLayout";
import BankList from "@/components/ui/BankList";
import { banks } from "@/lib/mockData";

export default function LowRating() {
  const lowScoreBanks = banks.filter(b => b.score < 55);

  return (
    <PageLayout>
      <div className="py-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-md">
          <h3 className="text-red-800 font-bold text-lg">Diqqat</h3>
          <p className="text-red-700">Ushbu ro'yxatdagi banklar moliyaviy barqarorlik bo'yicha quyi ko'rsatkichlarga ega.</p>
        </div>
        <BankList 
          title="55 Balldan Past Banklar" 
          description="Reyting bahosi 55 balldan past bo'lgan, e'tibor talab banklar."
          data={lowScoreBanks}
        />
      </div>
    </PageLayout>
  );
}
