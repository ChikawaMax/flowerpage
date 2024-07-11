'use client';

import Image from 'next/image';
import { useState } from 'react';

interface imgObj {
  name: string;
}

const images: imgObj[] = [
  { name: 'blueclock' },
  { name: 'blueclock3' },
  { name: 'blueclock4' },
  { name: 'blueclock2' },
  { name: 'blue-wreath' },
  { name: 'white-wreath2' },
  { name: 'blue-wreath2' },
  { name: 'pink-wreath' },
  { name: 'pink-wreath2' },
  { name: 'pink-wreath3' },
  { name: 'pinkbag' },
  { name: 'pinkbin' },
  { name: 'pinkbin2' },
  { name: 'pinkbin3' },
  { name: 'pinkbin4' },
  { name: 'pinkbin5' },
  { name: 'pinkclock' },
  { name: 'pinkclock2' },
  { name: 'pinkclock3' },
  { name: 'pinkclock4' },
  { name: 'pinkclock5' },
  { name: 'pinkclock6' },
  { name: 'pinkclock7' },
  { name: 'pinkclock8' },
  { name: 'pinkclock9' },
  { name: 'pinkclock10' },
  { name: 'red-wreath' },
  { name: 'red-wreath2' },
  { name: 'red-wreath3' },
  { name: 'redbin' },
  { name: 'redbin2' },
  { name: 'tera' },
  { name: 'white-bin' },
  { name: 'white-wreath3' },
];

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
