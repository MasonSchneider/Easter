import * as React from "react";
import { TaskPuzzle } from "../components/task-puzzle";

export default function Eliza() {
  return (
    <div>
      <h1 className="title">Eliza</h1>
      <TaskPuzzle tasks={[
          "Get a slushie",
          "Cannon ball the pool",
          "Pick something for us to do",
          "Hop like a bunny down the hotel hallway",
          "Get in a bar fight",
        ]} hint="3) I'm not a shelf, but I store," />
    </div>
  );
}
