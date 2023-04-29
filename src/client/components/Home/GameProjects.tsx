import { Card, CardBody } from "@material-tailwind/react";
import React from "react";

export function GameProjects() {
  const gameStyles = {
    paddingRight: "60rem",
    marginTop: "2rem",
    marginBottom: "2rem",
  };
  return (
    <div
      style={gameStyles}
      className="border border-gray-400 rounded-md drop-shadow-md h-96"
    >
      <div className="px-10">
        <h2 className="text-3xl">Game Projects</h2>
        <ul>
          <li>Rurh: The Northern Kingdoms</li>
        </ul>
      </div>
    </div>
  );
}
