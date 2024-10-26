import { Link } from "react-router-dom";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 w-full border-b bg-gray-300 z-10">
      <div className="h-16 container mx-auto flex items-center justify-between px-2">
        {/* Desktop logo */}
        <Link to="/" className="hidden md:flex text-xl md:text-2xl font-medium text-gray-800 gap-4 items-center">
        <Apple />
        <h2 className="hidden md:flex">EasyBuy</h2>
        </Link>

        {/* Desktop */}
        <MainNav />

        {/* Mobile */}
        <MobileNav />

        {/* Desktop & Mobile */}
        <h1 className="flex items-center gap-4">
          <Button asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/register">Register</Link>
          </Button>
        </h1>
      </div>
    </header>
  );
};

export default Header;
