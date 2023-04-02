import * as React from "react";
import { TaskPuzzle } from "../components/task-puzzle";

export default function Jamie() {
  return (
    <div>
      <h1 className="title">Jamie</h1>
      <TaskPuzzle tasks={[
          "Play a game of roulette",
          "Play a slot machine",
          "Swim in the pool",
          "Be awake after 11pm",
          "Volunteer at a magic show",
        ]} hint="2) I keep things safe and sound," />
    </div>
  );
}
