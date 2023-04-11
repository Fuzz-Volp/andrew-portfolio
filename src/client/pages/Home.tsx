import React from "react";
import { AboutAuthor, ArtProjects, GameProjects, Header } from "../components";

export function Home() {
  return (
    <div className="h-screen w-screen bg-slate-200">
      <div>
        <Header />
      </div>
      <div className="z-10 my-10">
        <GameProjects />
        <ArtProjects />
        <AboutAuthor />
      </div>
    </div>
  );
}
