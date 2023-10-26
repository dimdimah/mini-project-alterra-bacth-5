import Navbar from "./navbar";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen overflow-auto bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white">
      <Navbar />
      <div className="container px-8 py-4 mx-auto grow">{children}</div>
    </div>
  );
}
