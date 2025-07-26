import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/quran.gif";

const NavLogo = () => {
  return (
    <div className="flex items-center gap-2">
      {/* মোবাইলের জন্য (DAMM logo) */}
      <Link href="/" className="text-2xl block md:hidden ml-6">
        <Image
          src={Logo}
          width={70}
          alt="Logo"
        />
      </Link>

      {/* ডেস্কটপের জন্য (Name logo) */}
      <Link href="/" className="hidden md:flex justify-center items-center">
        <Image
          src={Logo}
          alt="Name Logo"
          height={70}
        />
        <span className="text-4xl galada-regular tracking-wider">HalalBase</span>
      </Link>
    </div>

  );
};

export default NavLogo;
