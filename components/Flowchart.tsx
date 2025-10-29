import React, { useRef, useEffect, useState } from 'react';
import type { FlowchartSection, FlowchartNode as FlowchartNodeType } from '../types';
import FlowchartNode from './FlowchartNode';
import { ArrowDownIcon } from './Icons';
import Connectors from './Connectors';

interface FlowchartProps {
  data: FlowchartSection[];
  onNodeClick: (node: FlowchartNodeType) => void;
}

const colorClasses = {
  blue: {
    bg: 'bg-blue-100',
    border: 'border-blue-300',
    title: 'text-blue-800',
    nodeBg: 'bg-blue-200 hover:bg-blue-300',
    nodeBorder: 'border-blue-400',
    nodeTitle: 'text-blue-900',
    nodeSubtitle: 'text-blue-700',
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-300',
    title: 'text-green-800',
    nodeBg: 'bg-green-200 hover:bg-green-300',
    nodeBorder: 'border-green-400',
    nodeTitle: 'text-green-900',
    nodeSubtitle: 'text-green-700',
  },
  red: {
    bg: 'bg-red-50',
    border: 'border-red-300',
    title: 'text-red-800',
    nodeBg: 'bg-red-200 hover:bg-red-300',
    nodeBorder: 'border-red-400',
    nodeTitle: 'text-red-900',
    nodeSubtitle: 'text-red-700',
  },
};

const Flowchart: React.FC<FlowchartProps> = ({ data, onNodeClick }) => {
    const nodeRefs = useRef<Record<string, HTMLButtonElement | null>>({});
    const [positions, setPositions] = useState<Record<string, {x: number, y: number, width: number, height: number}>>({});
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const calculatePositions = () => {
            if (!containerRef.current) return;
            const containerRect = containerRef.current.getBoundingClientRect();
            const newPositions: Record<string, {x: number, y: number, width: number, height: number}> = {};
            Object.keys(nodeRefs.current).forEach(key => {
                const el = nodeRefs.current[key];
                if (el) {
                    const rect = el.getBoundingClientRect();
                    newPositions[key] = {
                        x: rect.left - containerRect.left + rect.width / 2,
                        y: rect.top - containerRect.top,
                        width: rect.width,
                        height: rect.height
                    };
                }
            });
            // A simple trick to avoid resize loop, only update if positions changed
            if(JSON.stringify(positions) !== JSON.stringify(newPositions)){
                setPositions(newPositions);
            }
        };

        // Use a timeout to ensure layout is stable after initial render
        const timeoutId = setTimeout(calculatePositions, 100);
        window.addEventListener('resize', calculatePositions);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', calculatePositions);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);


  return (
    <div className="relative space-y-8" ref={containerRef}>
      <Connectors positions={positions} />
      {data.map((section, sectionIndex) => (
        <React.Fragment key={section.title}>
          <section
            className={`p-4 md:p-6 rounded-xl border-2 shadow-sm ${colorClasses[section.color].bg} ${colorClasses[section.color].border}`}
          >
            <h2 className={`text-xl font-bold text-center mb-6 ${colorClasses[section.color].title}`}>
              {section.title}
            </h2>
            <div className="flex flex-col items-center gap-4">
              {section.nodes.map((row, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-start justify-items-center">
                  {row.map((node, nodeIndex) => {
                    if (!node) {
                      // This placeholder is important for grid layout to keep other items in their correct columns.
                      // We hide it on mobile and show it as an empty block on larger screens.
                      return <div key={nodeIndex} className="hidden md:block" />;
                    }
                    return (
                      <FlowchartNode
                        key={node.id}
                        ref={el => {
                          // FIX: The ref callback was implicitly returning a value, which is not allowed. Changed to a block body to ensure it returns undefined.
                          nodeRefs.current[node.id] = el;
                        }}
                        node={node}
                        onClick={() => onNodeClick(node)}
                        colorClasses={colorClasses[section.color]}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </section>
          {sectionIndex < data.length - 1 && (
            <div className="flex justify-center">
              <ArrowDownIcon className="w-8 h-8 text-gray-400" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Flowchart;