import React, { useState } from "react";
import { useProductStore } from "../../stores/Artstore";
import Product from "../../@types/products";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

interface Props {
  product: Product;
}

export const Art: React.FC<Props> = ({
  product: { title, description, img, printPrice, originalPrice },
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <Card className="w-96">
      <CardHeader color="blue" className="relative h-56 rounded-md">
        <img src={img} alt={title} className="h-1/2 w-1/2 rounded-sm" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small"> ${printPrice}</Typography>
      </CardFooter>
    </Card>
  );
};
