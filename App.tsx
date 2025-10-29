
import React, { useState, useCallback } from 'react';
import { flowchartData, modalContent } from './constants';
import type { FlowchartNode as FlowchartNodeType } from './types';
import Flowchart from './components/Flowchart';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<FlowchartNodeType | null>(null);

  const handleNodeClick = useCallback((node: FlowchartNodeType) => {
    setSelectedNode(node);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedNode(null);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4 sm:p-6 md:p-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
          Herramientas y Procedimientos Estadísticos
        </h1>
        <p className="text-md md:text-lg text-gray-600 mt-2">
          Haz clic en cualquier recuadro para obtener una explicación detallada.
        </p>
      </header>
      <main className="container mx-auto">
        <Flowchart data={flowchartData} onNodeClick={handleNodeClick} />
      </main>
      
      {selectedNode && (
        <Modal
          title={selectedNode.title}
          subtitle={selectedNode.subtitle}
          content={modalContent[selectedNode.id]}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
