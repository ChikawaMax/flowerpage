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
    <header
      // style={{
      //   background: 'url(/img/blueclock2.jpg) no-repeat center center',
      //   backgroundSize: 'cover',
      // }}
      className="flex h-20 items-center px-4 md:px-6 bg-[#ffe6fb] text-xs sm:text-base"
    >
      <div className="flex items-center gap-2 w-0">
        <FlowerIcon />
        <span className="whitespace-nowrap">Cattleya＊夜桜</span>
      </div>
      <div className="flex-auto flex items-center justify-end sm:justify-center">
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
    </header>
  );
};
