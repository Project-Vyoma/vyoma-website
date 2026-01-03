import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Zap, Gauge, Maximize, Users, Thermometer, Satellite } from "lucide-react";

const specs = [
  { icon: <Gauge className="w-8 h-8 text-primary" />, title: "Propulsion", description: "Pulse Detonation Wave Engines" },
  { icon: <Maximize className="w-8 h-8 text-primary" />, title: "Dimensions", description: "110 ft Length, 60 ft Wingspan" },
  { icon: <Zap className="w-8 h-8 text-primary" />, title: "Max Speed", description: "Mach 6+ (Estimated)" },
  { icon: <Users className="w-8 h-8 text-primary" />, title: "Crew", description: "2 (Pilot, Reconnaissance Officer)" },
  { icon: <Thermometer className="w-8 h-8 text-primary" />, title: "Materials", description: "Titanium-Ceramic Composite" },
  { icon: <Satellite className="w-8 h-8 text-primary" />, title: "Payload", description: "Multi-spectrum Sensor Suite" },
];

export default function SpecificationsSection() {
  return (
    <section id="specifications" className="py-24 sm:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">
            Specifications
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm text-muted-foreground/80 font-light">
            Engineering excellence in every detail.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <Card key={index} className="bg-card/70 border-border/50 text-center hover:bg-card hover:shadow-primary/10 hover:shadow-lg transition-all transform hover:-translate-y-1">
              <CardHeader className="items-center">
                {spec.icon}
                <CardTitle className="mt-4">{spec.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{spec.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
