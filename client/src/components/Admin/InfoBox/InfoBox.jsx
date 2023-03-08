import React from "react";

export function InfoBox({ tittle, count, icon }) {
  return (
    <div>
      <h4>{tittle}</h4>
      <span>
        <h3>{count}</h3>
        {icon}
      </span>
    </div>
  );
}
