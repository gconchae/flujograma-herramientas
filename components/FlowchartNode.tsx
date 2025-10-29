
import React, { forwardRef } from 'react';
import type { FlowchartNode as FlowchartNodeType } from '../types';

interface FlowchartNodeProps {
  node: FlowchartNodeType;
  onClick: () => void;
  colorClasses: {
    nodeBg: string;
    nodeBorder: string;
    nodeTitle: string;
    nodeSubtitle: string;
  };
}

const FlowchartNode = forwardRef<HTMLButtonElement, FlowchartNodeProps>(({ node, onClick, colorClasses }, ref) => {
  const colSpanClass = node.colSpan ? `md:col-span-${node.colSpan}` : 'flex-1';
  
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`min-w-[200px] w-full md:w-auto text-center p-4 rounded-lg border-2 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${colorClasses.nodeBg} ${colorClasses.nodeBorder} ${colSpanClass}`}
    >
      <h3 className={`font-semibold ${colorClasses.nodeTitle}`}>{node.title}</h3>
      <p className={`text-sm ${colorClasses.nodeSubtitle}`}>{node.subtitle}</p>
    </button>
  );
});

FlowchartNode.displayName = 'FlowchartNode';

export default FlowchartNode;
