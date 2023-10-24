import { Link } from "react-router-dom";
import { useToken } from "@/utils/contexts/token";
import { toast } from "react-toastify";

export default function Navbar() {
  const { token, changeToken } = useToken();

  function handleLogout() {
    changeToken();
    toast.success("Successfully logout");
  }

  return (
    <header>
      <nav className="container flex items-center justify-between p-5 mx-auto">
        <Link
          to="/"
          className="py-2 text-lg font-semibold text-center text-gray-900"
        >
          WardrobeFit
        </Link>
        <div className="flex items-center justify-end gap-4">
          {token === "" ? (
            <>
              <Link
                to="/login"
                className="py-2 text-base text-center text-gray-900 rounded-full w-14 hover:text-gray-500"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="w-24 rounded-full py-3 text-center text-base text-gray-100 bg-[#0D0C22] hover:bg-[#565564]"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/products"
                className="w-16 py-3 text-base text-center text-gray-900 rounded-full hover:text-gray-500"
              >
                Products
              </Link>
              <p
                className="cursor-pointer w-24 rounded-full py-3 text-center text-base text-gray-100 bg-[#0D0C22] hover:bg-[#565564]"
                onClick={() => handleLogout()}
              >
                Logout
              </p>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
