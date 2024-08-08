'use client';

import Link from 'next/link';
import { FlowerIcon } from './icon/flowerIcon';
import { InstagramIcon } from './icon/InstagramIcon';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#ffe6fb] py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="container mx-auto flex flex-col items-center justify-between sm:flex-row"
      >
        <div className="flex items-center">
          <FlowerIcon />
        </div>
        <div className="mt-4 flex space-x-1 sm:mt-0">
          <Link
            href="https://www.instagram.com/cattleya_yozakura/"
            className="text-[#ff6b6b] hover:text-[#e04848] flex gap-2"
            prefetch={false}
          >
            <span className="font-bold text-[#333]">Instagram</span>
            <InstagramIcon className="h-6 w-6" />
          </Link>
        </div>
      </motion.div>
    </footer>
  );
}
