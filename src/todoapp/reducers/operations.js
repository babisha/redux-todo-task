import React from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  { id: uuidv4, todo: "Buy groceries", completed: true },
  { id: uuidv4, todo: "Make breakfast", completed: false },
  { id: uuidv4, todo: "Call insurance company", completed: false },
];

function Operations(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
  return <></>;
}

export default Operations;
