import Image from 'next/image';

export default function Portfolio() {
  interface imgObj {
    name: string;
  }

  const imgs: imgObj[] = [
    { name: 'blue-wreath' },
    { name: 'blue-wreath2' },
    { name: 'blueclock' },
    { name: 'blueclock2' },
    { name: 'pink-wreath' },
    { name: 'pink-wreath2' },
    { name: 'pinkbin' },
    { name: 'pinkbin2' },
    { name: 'pinkbin3' },
    { name: 'pinkbin4' },
    { name: 'pinkclock' },
    { name: 'pinkclock2' },
    { name: 'white-bin' },
    { name: 'white-wreath' },
    { name: 'white-wreath2' },
    { name: 'white-wreath3' },
  ];

  return (
    <div className="flex flex-col">
      <main className="flex-1 bg-background p-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-6">作品集</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {imgs.map((img) => {
              return (
                <Image
                  key={img.name}
                  src={`/img/${img.name}.jpg`}
                  width={300}
                  height={300}
                  alt={img.name}
                  className="w-full h-64 object-cover rounded-lg transition-all duration-300 group-hover:opacity-80"
                />
              );
            })}

            <div className="arelative group bsolute  inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
