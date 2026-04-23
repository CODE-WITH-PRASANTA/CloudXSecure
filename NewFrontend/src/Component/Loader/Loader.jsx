import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="main-container">
      <svg viewBox="0 0 400 300" className="ai-loader">

        {/* Glow Filter */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connections */}
        <line x1="100" y1="80" x2="200" y2="50" className="line flow" />
        <line x1="200" y1="50" x2="300" y2="80" className="line flow" />

        <line x1="100" y1="80" x2="120" y2="180" className="line flow delay1" />
        <line x1="200" y1="50" x2="200" y2="220" className="line flow delay2" />
        <line x1="300" y1="80" x2="280" y2="180" className="line flow delay3" />

        <line x1="120" y1="180" x2="200" y2="220" className="line flow delay2" />
        <line x1="200" y1="220" x2="280" y2="180" className="line flow delay1" />

        {/* Nodes */}
        <circle cx="100" cy="80" r="6" className="node" filter="url(#glow)" />
        <circle cx="200" cy="50" r="6" className="node" filter="url(#glow)" />
        <circle cx="300" cy="80" r="6" className="node" filter="url(#glow)" />

        <circle cx="120" cy="180" r="6" className="node" filter="url(#glow)" />
        <circle cx="200" cy="220" r="6" className="node" filter="url(#glow)" />
        <circle cx="280" cy="180" r="6" className="node" filter="url(#glow)" />

        {/* Pulses */}
        <circle cx="100" cy="80" r="2" className="pulse" />
        <circle cx="200" cy="50" r="2" className="pulse delay1" />
        <circle cx="300" cy="80" r="2" className="pulse delay2" />

        {/* Loading Text */}
        <text x="200" y="280" textAnchor="middle" className="loading-text">
          Loading AI System...
        </text>

      </svg>
    </div>
  );
};

export default Loader;