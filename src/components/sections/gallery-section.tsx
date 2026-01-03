import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">
            Gallery
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm text-muted-foreground/80 font-light">
            A curated collection of the Vyoma.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PlaceHolderImages.map((image) => (
            <Card key={image.id} className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative aspect-video w-full">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
