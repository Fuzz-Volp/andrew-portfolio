import React from "react";
import { GameHeader, Game, GameNews } from "../../components/Game/";
import { Card } from "@material-tailwind/react";

export function Games() {
  return (
    <Card>
      <GameHeader />
      <Game />
      <GameNews />
    </Card>
  );
}
