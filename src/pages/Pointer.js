import { useEffect, useState } from "react";

export default function Pointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function updateCursorPos(event) {
      const x = event.clientX;
      const y = event.clientY;
      setPosition({ x, y });
    }

    document.addEventListener("mousemove", updateCursorPos);

    return () => {
      document.removeEventListener("mousemove", updateCursorPos);
    };
  }, []);

  useEffect(() => {
    // Hide scrollbar on mount
    document.body.style.overflowX = "hidden";

    // Restore scrollbar on unmount
    return () => {
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <div
      className="absolute left-0 top-0 w-8 h-8 bg-gray-900 border-solid border-2 border-gray-400  pointer-events-none z-10 transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: position.x, top: position.y }}
    >
      <div className="w-1 h-8 bg-gray-400 mx-auto"></div>
    </div>
  );
}
