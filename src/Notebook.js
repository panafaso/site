import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "@observablehq/your-notebook-id"; // replace with your notebook slug or URL

function Notebook() {
  const chartRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "chart") return new Inspector(chartRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <div>
      <div ref={chartRef} />
    </div>
  );
}

export default Notebook;
