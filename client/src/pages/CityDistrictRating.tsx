import PageLayout from "@/components/layout/PageLayout";
import { regionalData } from "@/lib/mockData";
import { MapPin } from "lucide-react";

export default function CityDistrictRating() {
  // Mock data for districts (expanded from regional)
  const cityData = [
    { city: "Toshkent sh.", districts: [
      { name: "Yunusobod", rating: "A+", active: 15 },
      { name: "Mirobod", rating: "A", active: 12 },
      { name: "Chilonzor", rating: "A", active: 14 },
      { name: "Shayxontohur", rating: "B+", active: 10 },
    ]},
    { city: "Samarqand", districts: [
      { name: "Samarqand sh.", rating: "A", active: 18 },
      { name: "Urgut", rating: "B", active: 6 },
      { name: "Pastdarg'om", rating: "C+", active: 4 },
    ]},
  ];

  return (
    <PageLayout>
      <div className="py-8">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Shahar va Tumanlar Reytingi</h2>
        <p className="text-slate-600 mb-8 max-w-3xl">
          Yirik shaharlar va tumanlar kesimida bank xizmatlarining ommabopligi va sifat darajasi.
        </p>

        <div className="grid gap-8">
          {cityData.map((city, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
              <div className="p-4 bg-primary text-white flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <h3 className="text-lg font-bold">{city.city}</h3>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {city.districts.map((dist, dIdx) => (
                    <div key={dIdx} className="bg-slate-50 p-4 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-slate-800">{dist.name}</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                          dist.rating.startsWith('A') ? 'bg-green-100 text-green-700' :
                          dist.rating.startsWith('B') ? 'bg-yellow-100 text-yellow-700' :
                          'bg-slate-200 text-slate-700'
                        }`}>
                          {dist.rating}
                        </span>
                      </div>
                      <div className="text-sm text-slate-500">
                        Faol filiallar: <span className="text-slate-900 font-medium">{dist.active}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
