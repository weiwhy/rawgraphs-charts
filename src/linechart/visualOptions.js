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
    default: 15,
    group: '画板',
  },

  marginBottom: {
    type: 'number',
    label: '边距（底部）',
    default: 20,
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

  showPoints: {
    type: 'boolean',
    label: 'Show dots on data values',
    default: false,
    group: '图表',
  },

  dotsDiameter: {
    type: 'number',
    label: 'Dots diameter',
    default: 2,
    group: '图表',
    disabled: {
      showPoints: false,
    },
  },

  interpolation: {
    type: 'text',
    label: 'Curve type',
    default: 'curveBumpX',
    options: [
      { label: 'Basis', value: 'curveBasis' },
      { label: 'Bundle', value: 'curveBundle' },
      { label: 'Bump', value: 'curveBumpX' },
      { label: 'Cardinal', value: 'curveCardinal' },
      { label: 'Catmull–Rom', value: 'curveCatmullRom' },
      { label: 'Linear', value: 'curveLinear' },
      { label: 'Monotone X', value: 'curveMonotoneX' },
      { label: 'Natural', value: 'curveNatural' },
      { label: 'Step', value: 'curveStep' },
      { label: 'Step After', value: 'curveStepAfter' },
      { label: 'Step Before', value: 'curveStepBefore' },
    ],
    group: '图表',
  },

  yOrigin: {
    type: 'boolean',
    label: 'Set Y origin to 0',
    default: false,
    group: '图表',
    requiredDimensions: ['y'],
  },

  columnsNumber: {
    type: 'number',
    label: '列数',
    default: 0,
    group: '坐标系',
  },

  xTicksAuto: {
    type: 'boolean',
    label: 'Auto-place ticks on x axis',
    default: true,
    group: 'axes',
  },

  xTicksAmount: {
    type: 'number',
    label: 'Max. ticks on x axis',
    default: 1,
    group: 'axes',
    disabled: {
      xTicksAuto: true,
    },
  },

  xTicksOuter: {
    type: 'boolean',
    label: 'Show min/max on x axis',
    default: false,
    group: 'axes',
    disabled: {
      xTicksAuto: true,
    },
  },

  sortSeriesBy: {
    type: 'text',
    label: 'Sort series by',
    group: '坐标系',
    options: [
      'Total value (descending)',
      'Total value (ascending)',
      'Name',
      'Original',
    ],
    default: 'Total value (descending)',
  },

  useSameScale: {
    type: 'boolean',
    label: '使用相同比例',
    default: true,
    group: '坐标系',
  },

  showSeriesLabels: {
    type: 'boolean',
    label: '显示坐标系标题',
    default: true,
    group: '坐标系',
  },

  repeatAxesLabels: {
    type: 'boolean',
    label: 'Repeat axis labels for each series',
    default: false,
    group: '坐标系',
  },

  showLabels: {
    type: 'boolean',
    label: 'Show labels',
    default: true,
    group: '标签',
  },

  labelsPosition: {
    type: 'text',
    label: 'Labels position',
    options: ['inline', 'side'],
    default: 'inline',
    group: '标签',
    disabled: {
      showLabels: false,
    },
  },

  showGrid: {
    type: 'boolean',
    label: '显示坐标系网格',
    default: true,
    group: '坐标系',
  },

  colorScale: {
    type: 'colorScale',
    label: '色标',
    dimension: 'color',
    default: {
      scaleType: 'ordinal',
      interpolator: 'interpolateSpectral',
    },
    group: '颜色',
  },
}
