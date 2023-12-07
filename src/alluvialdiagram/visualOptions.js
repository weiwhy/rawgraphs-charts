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

  nodesWidth: {
    type: 'number',
    label: '节点宽度',
    default: 5,
    group: '图表',
  },

  nodesPadding: {
    type: 'number',
    label: '间距',
    default: 5,
    group: '图表',
  },

  linksOpacity: {
    type: 'number',
    label: '连线不透明度（0-1）',
    default: 1,
    step: 0.1,
    min: 0,
    max: 1,
    group: '图表',
  },

  linksBlendMode: {
    type: 'text',
    label: '连线混合模式',
    group: '图表',
    options: ['normal', 'multiply'],
    default: 'multiply',
  },

  sortNodesBy: {
    type: 'text',
    label: '节点排序依据',
    group: '图表',
    options: [
      { label: 'Size (descending)', value: 'sizeDescending' },
      { label: 'Size (ascending)', value: 'sizeAscending' },
      { label: 'Name', value: 'name' },
      { label: 'Minimize Overlaps', value: 'auto' },
    ],
    default: 'sizeAscending',
  },

  verticalAlignment: {
    type: 'text',
    label: '流量对齐',
    group: '图表',
    options: ['Top', 'Center', 'Bottom'],
    default: 'Center',
  },

  colorScale: {
    type: 'colorScale',
    label: '色标',
    dimension: 'source',
    default: {
      scaleType: 'ordinal',
      interpolator: 'interpolateSpectral',
    },
    group: '颜色',
  },

  showValues: {
    type: 'boolean',
    label: '显示节点的值',
    default: false,
    group: '标签',
  },
}
