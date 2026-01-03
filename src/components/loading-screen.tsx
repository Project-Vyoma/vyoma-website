"use client";

import { aircraftConfig } from "@/app/config";
import { Progress } from "@/components/ui/progress";

type LoadingScreenProps = {
  progress: number;
  isLoaded: boolean;
};

export default function LoadingScreen({ progress, isLoaded }: LoadingScreenProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="w-full max-w-md text-center p-4">
        <h1 className="text-4xl font-headline font-bold text-primary-foreground mb-4">
          {aircraftConfig.name}
        </h1>
        <Progress value={progress} className="w-full h-2" />
        <p className="text-muted-foreground mt-2 text-sm">{Math.round(progress)}%</p>
      </div>
    </div>
  );
}
