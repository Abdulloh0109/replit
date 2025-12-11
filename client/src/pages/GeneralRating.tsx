import PageLayout from "@/components/layout/PageLayout";
import BankList from "@/components/ui/BankList";
import { banks } from "@/lib/mockData";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import slide1 from "@assets/generated_images/modern_bank_interior_with_digital_screens.png";
import slide2 from "@assets/generated_images/business_meeting_in_a_glass_office.png";
import slide3 from "@assets/generated_images/digital_banking_mobile_app_concept.png";

export default function GeneralRating() {
  const slides = [
    {
      image: slide1,
      title: "Zamonaviy Bank Xizmatlari",
      description: "Eng so'nggi texnologiyalar asosida moliyaviy yechimlar"
    },
    {
      image: slide2,
      title: "Ishonchli Hamkorlik",
      description: "Biznesingiz rivoji uchun barqaror moliyaviy ko'mak"
    },
    {
      image: slide3,
      title: "Raqamli Transformatsiya",
      description: "Barcha bank xizmatlari sizning smartfoningizda"
    }
  ];

  return (
    <PageLayout showHero={true}>
      <div className="py-8">
        
        {/* Image Slider Section */}
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-serif font-bold text-slate-900">Bank Tizimi Yangiliklari</h2>
          </div>
          
          <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="p-1">
                    <Card className="border-0 shadow-lg overflow-hidden rounded-xl">
                      <CardContent className="p-0 relative aspect-video">
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h3>
                          <p className="text-lg text-gray-200">{slide.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/40 border-0 text-white" />
            <CarouselNext className="right-4 bg-white/20 hover:bg-white/40 border-0 text-white" />
          </Carousel>
        </div>

        <BankList 
          title="Umumiy Banklar Reytingi" 
          description="O'zbekiston tijorat banklarining to'liq va umumiy reytingi. Moliyaviy barqarorlik va ishonchlilik ko'rsatkichlari."
          data={banks}
          showRankHighlight={true}
        />
      </div>
    </PageLayout>
  );
}
