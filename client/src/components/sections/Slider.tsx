import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import slide0 from "@/assets/1.jpg";
import slide1 from "@/assets/1.1.jpg";
import slide2 from "@/assets/1.2.jpg";
import slide3 from "@/assets/1.3.jpg";
import slide4 from "@/assets/1.4.jpg";
import slide5 from "@/assets/1.5.jpg";

import slide6 from "@/assets/2.jpg";
import slide7 from "@/assets/2.1.jpg";
import slide8 from "@/assets/2.2.jpg";
import slide9 from "@/assets/2.3.jpg";
import slide10 from "@/assets/2.4.jpg";
import slide11 from "@/assets/2.5.jpg";

const slides1 = [
  {
    image: slide0,
  },
  {
    image: slide1,
  },
  {
    image: slide2,
  },
  {
    image: slide3,
  },
  {
    image: slide4,
  },
  {
    image: slide5,
  },
];

const slides2 = [
  {
    image: slide6,
  },
  {
    image: slide7,
  },
  {
    image: slide8,
  },
  {
    image: slide9,
  },
  {
    image: slide10,
  },
  {
    image: slide11,
  },
];

export default function SliderSection() {
  return (
    <div className="bg-white">
      {/* Growth Charts */}
      <section id="growth" className="py-20 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-10 font-bold text-slate-900">
            Reyting natijalari tahlili.
          </h2>
          <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
            <CarouselContent>
              {slides1.map((slide, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="p-1">
                    <Card className="border-0 shadow-lg overflow-hidden rounded-xl">
                      <CardContent className="p-0 relative aspect-video">
                        <img
                          src={slide?.image}
                          alt={"slide " + index}
                          className="w-full h-full object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.4)] border-0 text-white cursor-pointer" />
            <CarouselNext className="right-4 bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.4)] border-0 text-white cursor-pointer" />
          </Carousel>
        </div>
      </section>

      <section id="bank-tizimi" className="pb-20 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
            <CarouselContent>
              {slides2.map((slide, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="p-1">
                    <Card className="border-0 shadow-lg overflow-hidden rounded-xl">
                      <CardContent className="p-0 relative aspect-video">
                        <img
                          src={slide?.image}
                          alt={"slide " + index}
                          className="w-full h-full object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.4)] border-0 text-white cursor-pointer" />
            <CarouselNext className="right-4 bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.4)] border-0 text-white cursor-pointer" />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
