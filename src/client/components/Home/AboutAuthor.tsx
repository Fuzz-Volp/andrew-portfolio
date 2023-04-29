import { Button } from "@material-tailwind/react";
import { Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export interface IAboutProps {
  height?: string;
  width?: string;
  image?: string;
  title?: string;
  body?: string;
  children?: React.ReactNode;
}

const AboutAuthor: React.FunctionComponent<IAboutProps> = ({}) => {
  const aboutStyle = {
    height: "20rem",

    marginTop: "2rem",
    marginBottom: "2rem",
  };
  return (
    <div
      style={aboutStyle}
      className="border border-gray-400 rounded-md drop-shadow-md h-96 flex flex-col "
    >
      <h2 className="">About the Author</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque fugiat
        impedit repellat velit soluta neque asperiores dolorum cupiditate. Ab
        atque perferendis aperiam a illo excepturi dolor inventore dolore facere
        fugiat.
      </p>
      <div className="flex flex-row justify-center">
        <Link to={"/about"}>
          <Button className="inline-flex items-center px-3 py-2 w-` text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutAuthor;
