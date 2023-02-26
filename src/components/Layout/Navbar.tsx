import Link from "next/link";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black bg-[#fafafa]">
      <div className="mx-auto px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-row justify-start md:pl-32">
            <Link
              key="main"
              href="/"
              className="pl-2 text-2xl font-bold text-black"
            >
              Timelining
            </Link>
          </div>
          <div>
            <a
              href="https://github.com/gileadekelvin/timelining"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-6 w-6 text-gray-800" />
              <span className="sr-only">Github</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
