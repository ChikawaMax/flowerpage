'use client';

import Image from 'next/image';
import { images } from '../models/imgObj';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <div>
      <motion.h2
        className="text-3xl font-bold my-10 ml-6"
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        作品集
      </motion.h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-5">
        {images.map((image) => (
          <motion.div
            key={image.name}
            className="flex justify-center items-center relative overflow-hidden rounded-lg group"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
            viewport={{ once: false }}
          >
            <Image
              src={`/img/${image.name}.jpg`}
              alt={image.name}
              width="400"
              height="400"
              className="w-60 h-60 object-cover transition-all group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
