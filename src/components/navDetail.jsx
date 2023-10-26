import { Link } from "react-router-dom";

export default function NavDetails() {
  return (
    <header>
      <nav className="container flex items-center justify-start mx-auto pb-10">
        <Link
          to="/products/hijab"
          className="px-3 mx-4 rounded-full border border-gray-500 text-lg font-semibold text-center text-gray-900"
        >
          Hijab
        </Link>
        <Link
          to="/products/nonHijab"
          className="px-3 rounded-full border border-gray-500 text-lg font-semibold text-center text-gray-900"
        >
          Non Hijab
        </Link>
      </nav>
    </header>
  );
}
