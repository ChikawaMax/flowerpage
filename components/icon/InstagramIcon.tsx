import Link from "next/link";

export function InstagramIcon(props: any) {
  return (
    <Link
      href="https://www.instagram.com/cattleya_yozakura/"
      className="text-[#ff6b6b] hover:text-[#e04848]"
      prefetch={false}
    >
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    </Link>
  );
}
