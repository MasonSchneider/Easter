import * as React from "react";
import { TaskPuzzle } from "../components/task-puzzle";

export default function Reagan() {
  return (
    <div>
      <h1 className="title">Reagan</h1>
      <TaskPuzzle tasks={[
          "Play a game of craps",
          "Get a boozy slushie",
          "Cannon ball the pool",
          "Smoke a cigar while gambling",
          "Swim in the Bellagio fountains"
        ]} hint="4) Look inside me, there's always more." />
    </div>
  );
}
