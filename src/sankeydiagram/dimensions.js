export const dimensions = [
  {
    id: 'source',
    name: '源节点',
    validTypes: ['number', 'date', 'string'],
    required: true,
  },
  {
    id: 'target',
    name: '目标节点',
    validTypes: ['number', 'date', 'string'],
    required: true,
  },
  {
    id: 'size',
    name: 'Size',
    validTypes: ['number'],
    required: false,
    aggregation: true,
    aggregationDefault: 'sum',
  },
]
