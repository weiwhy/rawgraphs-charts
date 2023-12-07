export const visualOptions = {
  marginTop: {
    type: 'number',
    label: '边距（顶部）',
    default: 10,
    group: '画板',
  },

  marginRight: {
    type: 'number',
    label: '边距 (右)',
    default: 10,
    group: '画板',
  },

  marginBottom: {
    type: 'number',
    label: '边距（底部）',
    default: 10,
    group: '画板',
  },

  marginLeft: {
    type: 'number',
    label: '边距（左）',
    default: 10,
    group: '画板',
  },

  minDiameter: {
    type: 'number',
    label: 'Min diameter',
    default: 2,
    group: '图表',
  },

  maxDiameter: {
    type: 'number',
    label: 'Max diameter',
    default: 30,
    group: '图表',
  },

  linkOpacity: {
    type: 'number',
    label: '连线不透明度（0-1）',
    default: 0.5,
    step: 0.1,
    min: 0,
    max: 1,
    group: '图表',
  },

  sameSide: {
    type: 'boolean',
    label: '弧形仅在顶部',
    default: false,
    group: '图表',
  },

  nodeSize: {
    type: 'text',
    label: '节点直径',
    group: '图表',
    options: [
      { label: 'Same size', value: 'default' },
      { label: 'Weighted degree', value: 'totalValue' },
      { label: 'Weighted inDegree', value: 'inValue' },
      { label: 'Weighted outDegree', value: 'outValue' },
      { label: 'Links count', value: 'degree' },
      { label: 'OutDegree', value: 'outDegree' },
      { label: 'InDegree', value: 'inDegree' },
    ],
    default: 'totalValue',
  },

  orderNodesBy: {
    type: 'text',
    label: '节点排序依据',
    group: '图表',
    options: ['Name', 'Links count (degree)', 'Size', 'Minimize overlaps'],
    default: 'Minimize overlaps',
  },
}
