import { Roulette } from '@/components/autochange';
import { ChangeImg } from '@/components/changeimg';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

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
            <h1 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl">
              Cattleya＊夜桜
            </h1>
            <p className="text-muted-foreground md:text-xl">
              植物雑貨クリエイターの夜桜と申します。
              <br />
              フラワーアレンジメントを中心に大人可愛い、癒しをテーマにした植物雑貨作りをしております。
              <br />
              手にされた方皆様に幸せをお届け出来る様、心を込めてお作り致します。
              <br />
              作品を通して素敵な時間を過ごして貰えればとても嬉しいです。
            </p>
            <Button>
              <Link href="/portfolio" className="px-5">
                作品集
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="grid lg:grid-cols-2 grid-cols-1 items-center">
        <div className="flex items-center justify-center my-5">
          <h2 className="text-muted-foreground">
            綺麗にラッピングしてお届けします。
          </h2>
          <Roulette />
        </div>
        <div className="flex justify-center">
          <ChangeImg />
        </div>
      </section>
      {/* <section className="mb-10">
        <div className="w-[30rem] m-auto">
          <Image
            src="/img/wrapping.jpg"
            width={400}
            height={400}
            alt="Preserved Flower"
          />
          <Image
            src="/img/wrapping2.jpg"
            width={400}
            height={400}
            alt="Preserved Flower"
            className="-mt-16 ml-60"
          />
        </div>
      </section> */}
    </div>
  );
}
