import Image from "next/image";

export default function LogoCarousel() {
  /* const logos = [
    { src: "images/svg/atica.svg", alt: 'acme' },
    { src: "images/svg/amara.svg", alt: 'amara' },
    { src: "images/svg/atica.svg", alt: 'atica' },
    { src: "images/svg/circle.svg", alt: 'circle' },
    { src: "images/svg/code-lab.svg", alt: 'codelab' },
    { src: "images/svg/fox-hub.svg", alt: 'fox' }, 
  ]*/

  const logos = [
    { src: "images/hero/brand/1cztq58Fj7to7zz8dMarT0oz8.svg", alt: "acme" },
    { src: "images/hero/brand/ABZm12rBwLLZEO4MvzbUsQepmlU.svg", alt: "amara" },
    { src: "/images/hero/brand/InIlH0H8DraCdfCKhBGQrQpLZbY.svg", alt: "atica" },
    { src: "/images/hero/brand/6AbRyXI1vp9kRvdUWpFXQBuEI.svg", alt: "circle" },
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} width={72} height={72} />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} width={72} height={72} />
          </li>
        ))}
      </ul>
    </div>
  );
}
