"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Card } from "./ui/card";

interface FlippingCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

export function FlippingCard({ front, back, className }: FlippingCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn("group h-full w-full [perspective:1000px]", className)}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      aria-label="Flip card to see details"
    >
      <div
        className={cn(
          "relative h-full w-full rounded-lg shadow-xl transition-transform duration-700 [transform-style:preserve-3d]",
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        )}
      >
        <div className="absolute h-full w-full rounded-lg overflow-hidden [backface-visibility:hidden]">
          <Card className="h-full w-full">{front}</Card>
        </div>
        <div className="absolute h-full w-full rounded-lg overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Card className="h-full w-full">{back}</Card>
        </div>
      </div>
    </div>
  );
}
