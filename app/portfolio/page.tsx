'use client';

import Image from 'next/image';
import { useState } from 'react';
import { images } from '../models/imgObj';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string>('');

  return (
    <div className="container mx-auto py-12">
      {selectedImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setSelectedImage('')}
        >
          <Image
            src={`/img/${selectedImage}.jpg`}
            alt="Selected Image"
            width={800}
            height={800}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.name}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image.name)}
            >
              <Image
                src={`/img/${image.name}.jpg`}
                alt={image.name}
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-80"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
