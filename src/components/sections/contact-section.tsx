import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">
          Contact
        </h2>
        <p className="mt-3 max-w-xl mx-auto text-sm text-muted-foreground/80 font-light">
          Connect with our team to learn more.
        </p>
        <div className="mt-8">
          <Button size="lg" className="bg-primary-foreground/90 text-background hover:bg-primary-foreground rounded-full text-sm font-light px-8 py-3 transition-all duration-300">
            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
