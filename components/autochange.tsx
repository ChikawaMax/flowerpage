'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Roulette = () => {
  const array: string[] = ['wrapping', 'wrapping2'];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((oldCount) => {
        if (oldCount < array.length - 1) return oldCount + 1;
        return 0;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [array.length]);

  return (
    <Image
      src={`/img/${array[count]}.jpg`}
      width={300}
      height={300}
      alt="Change Image"
      className="aspect-square overflow-hidden rounded-xl object-cover border border-black"
    />
  );
};
