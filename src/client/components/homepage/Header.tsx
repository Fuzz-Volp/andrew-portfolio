import React from "react";

export function Header() {
  return (
    <div className="pb-96 h-fit">
      <header className="mx-auto w-11/12">
        <img
          src="https://media.istockphoto.com/id/513364450/photo/painter-sitting-front-of-easel-in-art-sudio.jpg?s=612x612&w=0&k=20&c=8AEO_i0ZkeokaaFOAhK8pYTXAQla-uH0aoVq9ti-lUE="
          alt="painter at work"
          className="z-0 absolute w-11/12"
        />
        <h1 className="text-5xl relative z-10">Andrew Thompson Art</h1>
      </header>
    </div>
  );
}
