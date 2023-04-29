import { Button, Card, CardBody } from "@material-tailwind/react";
import React from "react";

export function Game() {
  return (
    <CardBody>
      <Card>
        <div className="flex flex-col justify-center items-center">
          <h1>Get The Game</h1>
          <ul className="flex flex-row">
            <li>
              <Button>Hard Copy</Button>
            </li>
            <li>
              <Button>Digital Copy</Button>
            </li>
          </ul>
        </div>
      </Card>
      <Card>
        <div className="flex flex-col items-center">
          <h3>Web Exclusive Deals</h3>
        </div>
        <ul className="flex flex-col items-center">
          <li>
            <Button>Novice Bundle</Button>
          </li>
          <li>
            <Button>Journeyman Bundle</Button>
          </li>
          <li>
            <Button>Master Bundle</Button>
          </li>
        </ul>
      </Card>
    </CardBody>
  );
}
