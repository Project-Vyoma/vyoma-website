import Image from "next/image";

export default function AerodynamicsSection() {
  return (
    <section id="aerodynamics" className="py-24 sm:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">
              Aerodynamics
            </h2>
            <p className="text-sm text-muted-foreground/80 leading-relaxed font-light">
              A unique lifting body design that maximizes efficiency at hypersonic speeds while minimizing radar signature.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mr-3 mt-2 shrink-0"></div>
                <p className="text-sm text-muted-foreground/80 font-light"><span className="font-medium text-foreground/90">Lifting Body</span> — Optimized for hypersonic flight</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mr-3 mt-2 shrink-0"></div>
                <p className="text-sm text-muted-foreground/80 font-light"><span className="font-medium text-foreground/90">Active Cooling</span> — Manages extreme temperatures</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mr-3 mt-2 shrink-0"></div>
                <p className="text-sm text-muted-foreground/80 font-light"><span className="font-medium text-foreground/90">Stealth Design</span> — Minimal control surfaces</p>
              </li>
            </ul>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <Image 
                src="https://picsum.photos/seed/202/800/450" 
                alt="Wind tunnel simulation" 
                fill
                className="object-cover"
                data-ai-hint="wind tunnel"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
            <p className="absolute bottom-4 left-4 text-sm font-code text-primary-foreground/80">
              // CFD ANALYSIS: WINGROOT VORTEX
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
