import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="w-full bg-background py-12">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <Image
            src="/img/pinkclock.jpg"
            width={550}
            height={550}
            alt="Preserved Flower"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          />
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              フラワーアレジメント
            </h1>
            <p className="text-muted-foreground md:text-xl">
              オーダーメイド受け付けてます。
            </p>
            <Button>
              <Link href="/portfolio" className="px-5">
                作品集
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
