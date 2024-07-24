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
    <Carousel className="w-full max-w-xs mx-3">
      <CarouselContent>
        {images.map((image) => {
          return (
            <CarouselItem key={image.name}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center">
                    <Image
                      src={`/img/${image.name}.jpg`}
                      width={500}
                      height={500}
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
