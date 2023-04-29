import React from "react";

export interface IHeaderProps {
  height?: string;
  image?: string;
  title?: string;
  headline?: string;
  children?: React.ReactNode;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const { children, image, headline, title } = props;
  const headerStyle = {
    background:
      "linear-gradient(rgba(36, 20, 38, 0.5), rgba(36, 39, 38, 0.5)), url(" +
      image +
      ") no-repeat center center",
    WebkitBackgroundSize: "cover",
    MozBackgroundSize: "cover",
    OBackgroundSize: "cover",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "40rem",
    marginBottom: "5rem",
  };
  return (
    <header style={headerStyle}>
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-transparent bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            {headline}
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"></div>
        </div>
      </section>
    </header>
  );
};

Header.defaultProps = {
  height: "100%",
  image:
    "https://images.unsplash.com/photo-1488274319148-051ed60a9404?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80",
};

export default Header;
