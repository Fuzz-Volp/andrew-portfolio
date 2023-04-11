import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="w-screen h-fit">
      <ul className="h-36 my-10 flex flex-row justify-evenly items-center bg-green-500 underline text-2xl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
        <li>
          <Link to="/art">Art</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <div>Search</div>
        </li>
        <li>
          <div>Cart</div>
        </li>
      </ul>
    </nav>
  );
}
