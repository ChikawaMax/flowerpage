import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { images } from '@/app/models/imgObj';

export const ChangeImg = () => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {images.map((image) => {
          return (
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center">
                    <Image
                      src={`/img/${image.name}.jpg`}
                      width={1000}
                      height={1000}
                      alt="Preserved Flower"
                      className="aspect-square overflow-hidden rounded-xl object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
