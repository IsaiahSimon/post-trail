import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex h-24 w-full items-center justify-center ">
      <span className="w-full text-center text-sm text-postDarkBlue">
        © {new Date().getFullYear()} Built with care by{" "}
        <Link
          href="https://isimon.dev/"
          className="cursor-pointer hover:text-accent "
          target="_blank"
          rel="noopener noreferrer"
        >
          Isaiah Simon
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
