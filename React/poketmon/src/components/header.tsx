import { BrowserRouter, Link } from "react-router-dom";
//import styles from "./header.module.css";

export default function Header() {
  return (
    <div className="border-b-2 border-b-yellow-400 py-5 pl-5">
      <Link to="/" className="underline-offset-0 hover:bg-white">
        <h1 className="text-3xl font-bold text-yellow-400 no-underline">
          Poketmon List
        </h1>
      </Link>
    </div>
  );
}
