import { Link } from "react-router-dom";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 w-full border-b">
      <div className="h-16 container mx-auto flex items-center justify-between px-2">
        {/* Desktop logo */}
        <Link to="/" className="hidden md:flex text-xl">
          <Apple className="text-red-300 size-7" />
        </Link>

        {/* Desktop */}
        <MainNav />

        {/* Mobile */}
        <MobileNav />

        {/* Desktop & Mobile */}
        <h1 className="flex items-center">
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </h1>
      </div>
    </header>
  );
};

export default Header;
