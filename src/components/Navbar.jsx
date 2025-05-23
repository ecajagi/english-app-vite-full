
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white shadow sticky top-0 z-50">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">English Explorer</h1>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <span className="text-xl">&#9776;</span>
        </button>
        <nav className={`md:flex md:items-center ${open ? "block" : "hidden"}`}>
          <Link to="/" className="block p-2">Home</Link>
          <Link to="/work/grammar" className="block p-2">Work Hard</Link>
          <Link to="/play/quotes" className="block p-2">Play Hard</Link>
        </nav>
      </div>
    </div>
  );
}
