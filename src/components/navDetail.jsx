import { Link } from "react-router-dom";

export default function NavDetails() {
  return (
    <header>
      <nav className="container flex items-center justify-start pb-10 mx-auto">
        <Link
          to="/products/hijab"
          className="px-3 mx-4 text-lg font-semibold text-center text-gray-900 hover:underline hover:delay-150"
        >
          Hijab
        </Link>
        <Link
          to="/products/nonHijab"
          className="px-3 text-lg font-semibold text-center text-gray-900 hover:underline hover:delay-150"
        >
          Non Hijab
        </Link>
      </nav>
    </header>
  );
}
