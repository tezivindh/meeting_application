import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Contactt Logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Contactt
        </p>
      </Link>

      <div className="flex-between gap-5">
        {/* Clerk - User Management */}
        <SignedIn>
          <UserButton
            appearance={{
              variables: {
                colorPrimary: "#fff",
                colorText: "#fff",
                colorBackground: "#1C1F2E",
                colorInputBackground: "#252A41",
                colorInputText: "#fff",
              },
            }}
          />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};
export default Navbar;
