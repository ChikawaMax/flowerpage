import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="w-full bg-background py-12">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <Image
            src="/img/flower1.jpg"
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
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              作品集
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
