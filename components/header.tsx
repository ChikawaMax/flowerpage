'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { FlowerIcon } from './icon/flowerIcon';

export const Header = () => {
  const HeaderArray = [
    { title: 'ホーム', link: '/' },
    { title: '作品集', link: '/portfolio' },
    { title: 'お問い合わせ', link: '/contact' },
  ];

  return (
    <header className="flex h-20 items-center px-4 md:px-6 bg-[#ffe6fb] text-xs sm:text-base">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="flex h-20 items-center w-full justify-between"
      >
        <div className="flex items-center gap-4 w-0">
          <FlowerIcon />
          <span className="whitespace-nowrap">Cattleya＊夜桜</span>
        </div>
        <div className="flex-auto flex items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1 sm:gap-5">
              {HeaderArray.map((Header) => {
                return (
                  <NavigationMenuLink asChild key={Header.title}>
                    <Link
                      href={Header.link}
                      prefetch={false}
                      className="font-bold hover:border-b"
                    >
                      {Header.title}
                    </Link>
                  </NavigationMenuLink>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </motion.div>
    </header>
  );
};
