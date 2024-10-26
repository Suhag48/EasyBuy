import { Link } from "react-router-dom";
import { Apple } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-gray-300 px-4">
      <div className="flex flex-row gap-8 sm:gap-0 justify-between container mx-auto flex-wrap">
        <div className="hidden sm:flex justify-center items-center">
          <Link
            to="/"
            className="text-xl md:text-2xl font-medium text-gray-800 flex gap-4 items-center"
          >
            <Apple />
            <h2 className="hidden md:flex">EasyBuy</h2>
          </Link>
        </div>
        <div className="flex flex-col">
          <h2 className="md:text-lg text-gray-800 font-medium">
            About EasyBuy
          </h2>
          <div className="flex flex-col gap-2 mt-5 text-sm md:text-base text-gray-700">
            <Link>Our Story</Link>
            <Link>Team</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms of Use</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="md:text-lg text-gray-800 font-medium">Category</h2>
          <div className="flex flex-col gap-2 mt-5 text-sm md:text-base text-gray-700">
            <Link to="/contact">Contact Us</Link>
            <Link>FAQ</Link>
          </div>
        </div>
        <div>
          <h2 className="md:text-lg text-gray-800 font-medium">
            Payment Method
          </h2>
          <img src={""} alt="payment method" className="w-24 h-12 mt-3" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
