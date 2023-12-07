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

  bandwidth: {
    type: 'number',
    label: 'Bandwidth',
    default: 20,
    step: 1,
    min: 1,
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
    domain: 'colorDomain',
    default: {
      scaleType: 'sequential',
      interpolator: 'interpolateBlues',
    },
    group: 'colors',
    requiredDimensions: ['x', 'y'],
  },

  showBandLabels: {
    type: 'boolean',
    label: 'Show band labels',
    default: false,
    group: 'labels',
    requiredDimensions: ['x', 'y'],
  },

  labelThresholds: {
    type: 'number',
    label: 'Labels threshold steps',
    default: 5,
    step: 1,
    min: 1,
    group: 'labels',
    disabled: {
      showBandLabels: false,
    },
    requiredDimensions: ['x', 'y'],
  },

  showLabelsOutline: {
    type: 'boolean',
    label: 'Show outline',
    default: false,
    group: 'labels',
    disabled: {
      showBandLabels: false,
    },
    requiredDimensions: ['x', 'y'],
  },

  autoHideLabels: {
    type: 'boolean',
    label: 'Auto hide labels',
    default: false,
    group: 'labels',
    disabled: {
      showBandLabels: false,
    },
    requiredDimensions: ['x', 'y'],
  },
}
