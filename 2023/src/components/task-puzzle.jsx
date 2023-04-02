import * as React from "react";
import { useState } from 'react';

export function TaskPuzzle({ tasks, hint }) {

  const [taskCount, setTaskCount] = useState(0);

  const handleCheck = (event) => {
    var currCount = taskCount;
    if (event.target.checked) {
      currCount += 1;
    } else {
      currCount -= 1;
    }
    setTaskCount(currCount);
  };
  
  return (
    <>
      <h3>Your Checklist:</h3>
      <h4>Completed {taskCount}/2</h4>
      <ul className="checkbox-list">
        {tasks.map((item, index) => (
          <li key={index}>
            <label>
              <input value={index} onChange={handleCheck} type="checkbox" />
              <span>{item}</span>
            </label>
          </li>
        ))}
        {taskCount >= 2 &&
          <span>{hint}</span>
        }
      </ul>
      <div className="text-info">
        You're only allowed to check a box with Schneider approval.
      </div>
    </>
  );
};
