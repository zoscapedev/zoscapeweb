import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="h-[50px] w-[180px] relative hidden md:block ml-[32rem]">
      <Image
        src="/images/zoscape.png"
        alt="logo"
        fill
        sizes="150px"
        priority
        unoptimized
      />
    </Link>
  );
};

export default Logo;