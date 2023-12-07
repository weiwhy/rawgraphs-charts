export const visualOptions = {
  marginTop: {
    type: 'number',
    label: '边距（顶部）',
    default: 50,
    group: '画板',
  },

  marginRight: {
    type: 'number',
    label: '边距 (右)',
    default: 50,
    group: '画板',
  },

  marginBottom: {
    type: 'number',
    label: '边距（底部）',
    default: 50,
    group: '画板',
  },

  marginLeft: {
    type: 'number',
    label: '边距（左）',
    default: 50,
    group: '画板',
  },

  showLegend: {
    type: 'boolean',
    label: '显示图例',
    default: false,
    group: '画板',
  },

  legendWidth: {
    type: 'number',
    label: '图例宽度',
    default: 200,
    group: '画板',
    disabled: {
      showLegend: false,
    },
    container: 'width',
    containerCondition: {
      showLegend: true,
    },
    requiredDimensions: ['x', 'y'],
  },

  xOrigin: {
    type: 'boolean',
    label: 'Set X origin to 0',
    default: false,
    group: '图表',
    requiredDimensions: ['x', 'y'],
  },

  yOrigin: {
    type: 'boolean',
    label: 'Set Y origin to 0',
    default: false,
    group: '图表',
    requiredDimensions: ['x', 'y'],
  },

  diameter: {
    type: 'number',
    label: 'Bin diameter',
    default: 8,
    step: 1,
    group: '图表',
    requiredDimensions: ['x', 'y'],
  },

  weightSize: {
    type: 'boolean',
    label: 'Scale hexagons area',
    default: false,
    group: '图表',
    requiredDimensions: ['x', 'y'],
  },

  showPoints: {
    type: 'boolean',
    label: 'Show dots on data values',
    default: false,
    group: '图表',
    requiredDimensions: ['x', 'y'],
  },

  dotsDiameter: {
    type: 'number',
    label: 'Dots diameter',
    default: 2,
    group: '图表',
    disabled: {
      showPoints: false,
    },
    requiredDimensions: ['x', 'y'],
  },

  colorScale: {
    type: 'colorScale',
    label: '色标',
    //dimension: 'color',
    domain: 'colorDomain',
    default: {
      scaleType: 'sequential',
      interpolator: 'interpolateBlues',
    },
    group: 'colors',
    requiredDimensions: ['x', 'y'],
  },

  showCountLabels: {
    type: 'boolean',
    label: 'Show count labels',
    default: false,
    group: 'labels',
    requiredDimensions: ['x', 'y'],
  },

  showLabelsOutline: {
    type: 'boolean',
    label: 'Show outline',
    default: false,
    group: 'labels',
    requiredDimensions: ['x', 'y'],
  },

  autoHideLabels: {
    type: 'boolean',
    label: 'Auto hide labels',
    default: false,
    group: 'labels',
    requiredDimensions: ['x', 'y'],
  },
}
