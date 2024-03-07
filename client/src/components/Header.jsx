import { IoBookSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-cyan-950 py-1 shadow-md">
      <nav className="max-w-5xl mx-auto px-6 my-1">
        <div className="flex items-center justify-between py-1">
          <Link to="/" className="flex items-center gap-2">
            <IoBookSharp size={30} color="white" />
            <h1 className="text-xl md:text-2xl text-cyan-50 font-semibold">
              Books Store App
            </h1>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-cyan-100 hover:text-cyan-400 font-medium text-md"
            >
              Home
            </Link>
            <Link
              to="/book/create"
              className="text-cyan-100 hover:text-cyan-400 font-medium text-md"
            >
              Create Book
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
