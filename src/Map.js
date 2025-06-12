import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "5abee2bb45931f28";

function Notebook() {
  const chartRef = useRef();
  const worldRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "chart") return new Inspector(chartRef.current);
      if (name === "world") return new Inspector(worldRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={chartRef} />
      <div ref={worldRef} />
      <p>Credit: <a href="https://observablehq.com/d/5abee2bb45931f28@209">Zoom to bounding box by Panagiotis Fasoulidis</a></p>
    </>
  );
}

export default Notebook;
