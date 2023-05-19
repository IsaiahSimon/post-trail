import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <header className="flex h-24 justify-between border-b-4 border-accent p-[20px]">
      <Link href="/">
        <span className="text-4xl text-postDarkBlue">Post Trail</span>
      </Link>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </header>
  );
};

export default Navbar;
