import React from "react";
import { useEffect, useState } from "react";
const NotFind = () => {
  const [mousePos, setMousePos] = useState({});
  const [symbolMove, setSymbolMove] = useState({});
  const [triangleMove, setTriangleMove] = useState({});
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    var symbolPosTmp = { x: 0, y: 0 },
      trianglePosTmp = { x: 50, y: 0 };
    if (mousePos.x !== 0) {
      if (mousePos.x > 850) {
      }
      symbolPosTmp.x = mousePos.x / 20;
      trianglePosTmp.x = mousePos.x / 100 + 50;
    }
    if (mousePos.y !== 0) {
      symbolPosTmp.y = mousePos.y / 20;
      trianglePosTmp.y = mousePos.y / 100;
    }
    setSymbolMove({ x: symbolPosTmp.x, y: symbolPosTmp.y });
    setTriangleMove({ x: trianglePosTmp.x, y: trianglePosTmp.y });
  }, [mousePos]);
  console.log(mousePos.x + " " + mousePos.y);
  var symbol = require("../views/Asset 3@3x.png");
  return (
    <div className="not-find-container container-fluid row">
      <div className="warning-triangle-container col order-md-2">
        <div
          className="warning-triangle"
          style={{ left: triangleMove.x, top: triangleMove.y }}
        ></div>
        <div className="warning-triangle-symbol">
          <img
            src={symbol}
            alt=""
            style={{ left: symbolMove.x, top: symbolMove.y }}
          />
        </div>
      </div>
      <div className="not-find-exp col order-md-1">
        <h2>404</h2>
        <p>Opps! It seems like this page is not available.</p>
        <p>Please check your URL</p>
      </div>
    </div>
  );
};

export default NotFind;
