"use client";

import { useEffect } from "react";

// interface DisabledButtonProps {
//   funFunc: () => void;
// }

const DisabledButton: React.FC = () => {
  const funFunc = () => {};

  useEffect(() => {
    const button = document.querySelector("button");
    if (button) {
      button.disabled = false;
      button.addEventListener("click", funFunc);
    }
  }, [funFunc]);

  return <button disabled>Go back to home</button>;
};

export default DisabledButton;
