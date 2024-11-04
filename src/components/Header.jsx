import { Link } from "react-router-dom";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";
import { Apple, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 w-full border-b bg-gray-300 z-10">
      <div className="h-20 px-4 sm:px-8 md:px-12 lg:px-24 flex items-center justify-between">
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
        <div className="flex items-center">
          <Button variant="link">
            <Link to="/login" className="text-lg font-normal">Login</Link>
          </Button>
          <Button variant="link">
            <Link to="/register" className="text-lg font-normal">Register</Link>
          </Button>
          <Button variant="outline" size="icon" className="bg-transparent border-none">
          <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
