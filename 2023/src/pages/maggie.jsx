import * as React from "react";
import { TaskPuzzle } from "../components/task-puzzle";

export default function Maggie() {
  return (
    <div>
      <h1 className="title">Maggie</h1>
      <TaskPuzzle tasks={[
          "Get a boozy slushie",
          "Play a game of blackjack",
          "Play mermaids in the pool and do a frontflip underwater",
          "Play a game of roulette",
          "Get a face tattoo",
        ]} hint="1) In a room, I can be found," />
    </div>
  );
}
