import { Card } from "flowbite-react";
import React from "react";

export function ArtProjects() {
  const artStyles = {
    paddingRight: "60rem",
    marginTop: "2rem",
    marginBottom: "2rem",
  };

  return (
    <div
      style={artStyles}
      className="border border-gray-400 rounded-md drop-shadow-md h-96 "
    >
      <h2 className="">Art Projects</h2>
      <ul>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
      </ul>
    </div>
  );
}
