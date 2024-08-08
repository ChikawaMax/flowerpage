'use client';

import { Roulette } from '@/components/autochange';
import { ChangeImg } from '@/components/changeimg';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <section className="w-full bg-background py-12">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <Image
            src="/img/pinkclock10.jpg"
            width={550}
            height={550}
            alt="Preserved Flower"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          />
          <div className="space-y-4">
            <motion.h1
              initial={{ scale: 1, rotate: 0 }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
              }}
              className="text-3xl tracking-tighter sm:text-4xl md:text-5xl"
            >
              Cattleya＊夜桜
            </motion.h1>
            <p className="text-muted-foreground md:text-xl">
              植物雑貨クリエイターの夜桜と申します。
              <br />
              フラワーアレンジメントを中心に大人可愛い、癒しをテーマにした植物雑貨作りをしております。
              <br />
              手にされた方皆様に幸せをお届け出来る様、心を込めてお作り致します。
              <br />
              作品を通して素敵な時間を過ごして貰えればとても嬉しいです。
            </p>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-primary hover:bg-primary/90  rounded-md px-6 py-3"
            >
              <Link href="/portfolio">作品集</Link>
            </motion.button>
          </div>
        </div>
      </section>
      <section className="grid lg:grid-cols-2 grid-cols-1 items-center mb-6">
        <div className="flex items-center justify-center my-5">
          <h2 className="text-muted-foreground">
            綺麗にラッピングしてお届けします。
          </h2>
          <Roulette />
        </div>
        <div className="flex justify-center px-12">
          <ChangeImg />
        </div>
      </section>
    </div>
  );
}
