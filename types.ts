
export interface FlowchartNode {
  id: string;
  title: string;
  subtitle: string;
  colSpan?: number;
  rowSpan?: number;
}

export interface FlowchartSection {
  title: string;
  color: 'blue' | 'green' | 'red';
  nodes: (FlowchartNode | null)[][]; // Grid of nodes, null for empty cells
}
