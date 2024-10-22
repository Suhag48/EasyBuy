import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div className="hidden md:flex">
      <nav className="flex items-center flex-end gap-4 lg:gap-6 ml-8 text-xl">
      <Link to="/">Home</Link>
        <Link to="/project">Project</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default MainNav;
