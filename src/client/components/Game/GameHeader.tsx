import { Card, CardHeader } from "@material-tailwind/react";
import React from "react";

export function GameHeader() {
  return (
    <CardHeader>
      <div className=" h-96 p-10 m-4 flex justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <header>
          <h1 className="mb-2 mx-auto text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Welcome to Ruhr:
          </h1>
          <h5>The Northern Realms!</h5>
        </header>
      </div>
      <main>
        <div></div>
      </main>
    </CardHeader>
  );
}
