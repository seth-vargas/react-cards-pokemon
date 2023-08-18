import { useState } from "react";

export default function useFlip(isFlipped = false) {
  const [value, setValue] = useState(isFlipped);

  function toggleFlipState() {
    setValue((old) => !old);
  }

  return [currentFlipState, toggleFlipState];
}
