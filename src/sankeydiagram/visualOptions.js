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
    label: 'Nodes width',
    default: 5,
    group: '图表',
  },

  nodesPadding: {
    type: 'number',
    label: 'Min. vertical padding',
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

  circularLinkGap: {
    type: 'number',
    label: 'Circular links gap',
    default: 2,
    step: 1,
    min: 0,
    group: '图表',
  },

  linksBlendMode: {
    type: 'text',
    label: 'Links blend mode',
    group: '图表',
    options: ['normal', 'multiply'],
    default: 'multiply',
  },

  alignment: {
    type: 'text',
    label: 'Nodes alignment',
    group: '图表',
    options: ['Left', 'Right', 'Center', 'Justify'],
    default: 'Left',
  },

  iterations: {
    type: 'number',
    label: 'Iterations (attempts to solve overlaps)',
    default: 6,
    group: '图表',
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
    label: 'Show nodes values',
    default: false,
    group: '标签',
  },
}
