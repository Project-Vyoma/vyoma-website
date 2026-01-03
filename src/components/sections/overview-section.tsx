import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function OverviewSection() {
  return (
    <section id="overview" className="py-24 sm:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">
            A New Era
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm text-muted-foreground/80 font-light">
            Redefining aerial surveillance with unprecedented speed and stealth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                 <Image 
                    src="https://picsum.photos/seed/201/800/600"
                    alt="Vyoma schematic" 
                    fill
                    className="object-cover"
                    data-ai-hint="blueprint schematic"
                />
            </div>
            <div className="space-y-5">
                <h3 className="font-headline text-2xl font-bold tracking-tight">Engineered for the Edge</h3>
                <p className="text-muted-foreground/80 text-sm leading-relaxed font-light">
                    Designed for extreme performance. Built to operate where others cannot.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                    <Card className="bg-card/50">
                        <CardContent className="p-6">
                            <p className="text-4xl font-bold text-primary">Mach 6+</p>
                            <p className="text-sm text-muted-foreground mt-1">Max Speed</p>
                        </CardContent>
                    </Card>
                     <Card className="bg-card/50">
                        <CardContent className="p-6">
                            <p className="text-4xl font-bold text-primary">100k ft</p>
                            <p className="text-sm text-muted-foreground mt-1">Service Ceiling</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
