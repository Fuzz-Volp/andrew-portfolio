import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import React from "react";

export interface IPageTitleProps {
  heading: string;
  children?: React.ReactNode;
}

const PageTitle: React.FunctionComponent<IPageTitleProps> = ({
  heading,
  children,
}) => {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      <Typography variant="h2" color="blue-gray" className="mb-3">
        {heading}
      </Typography>
      <Typography variant="lead" className="text-blue-gray-500">
        {children}
      </Typography>
    </div>
  );
};

PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
