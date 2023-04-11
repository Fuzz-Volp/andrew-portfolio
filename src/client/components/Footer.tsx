import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="bg-sky-700 h-36 my-10 flex flex-row justify-evenly items-center underline text-2xl">
      <h1>footer</h1>
      <span>
        <ul>
          <li>asdf</li>
          <li>asdf</li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </span>
    </div>
  );
}
