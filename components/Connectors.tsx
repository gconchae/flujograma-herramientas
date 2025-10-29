import React from 'react';

interface ConnectorsProps {
  positions: Record<string, { x: number, y: number, width: number, height: number }>;
}

const SvgPath: React.FC<{ start: any, end: any, label?: string }> = ({ start, end, label }) => {
    if (!start || !end) return null;

    const startX = start.x;
    const startY = start.y + start.height;
    const endX = end.x;
    const endY = end.y;

    const isConditional = !!label;

    const pathD = isConditional
        ? `M ${startX} ${startY + 4} L ${endX} ${endY}` // Straight line for conditional path
        : `M ${startX} ${startY} C ${startX} ${startY + 40}, ${endX} ${endY - 40}, ${endX} ${endY - 10}`; // Bezier curve for others

    const strokeColor = isConditional ? 'rgb(34 197 94 / 0.9)' : 'rgb(156 163 175 / 0.8)'; // Green for conditional, gray for others
    const textColor = isConditional ? 'rgb(22 101 52)' : 'rgb(55 65 81)'; // Dark green for conditional text

    return (
        <g>
            <path
                d={pathD}
                stroke={strokeColor}
                strokeWidth="2"
                fill="none"
                strokeDasharray={isConditional ? "4 4" : "5 5"}
                markerEnd={`url(#arrowhead-${isConditional ? 'conditional' : 'default'})`}
            />
            {label && (
                <text
                    x={startX + 10}
                    y={startY + (endY - startY) / 2}
                    fill={textColor}
                    fontSize="13"
                    textAnchor="start"
                    dominantBaseline="middle"
                    className="font-semibold"
                    style={{ paintOrder: 'stroke', stroke: 'rgb(249 250 251 / 0.7)', strokeWidth: '4px', strokeLinejoin: 'round' }}
                >
                    {label}
                </text>
            )}
        </g>
    );
};


const Connectors: React.FC<ConnectorsProps> = ({ positions }) => {
  if (Object.keys(positions).length === 0) return null;
  
  const connections = [
    { from: 'mann-whitney', to: 'rosenthal' },
    { from: 'mann-whitney', to: 'cliff' },
    { from: 'wilcoxon', to: 'rosenthal' },
    { from: 'kruskal-wallis', to: 'eta-squared' },
    { from: 'kruskal-wallis', to: 'dunn', label: 'significativo' },
  ];

  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true">
        <defs>
            <marker
                id="arrowhead-default"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
            >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(156 163 175 / 0.8)" />
            </marker>
            <marker
                id="arrowhead-conditional"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
            >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(34 197 94 / 0.9)" />
            </marker>
        </defs>
        {connections.map(conn => (
            <SvgPath 
                key={`${conn.from}-${conn.to}`} 
                start={positions[conn.from]} 
                end={positions[conn.to]}
                label={conn.label}
            />
        ))}
    </svg>
  );
};

export default Connectors;