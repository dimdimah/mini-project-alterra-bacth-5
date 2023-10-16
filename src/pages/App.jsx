import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Link from "react";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Link href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Link href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </div>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
